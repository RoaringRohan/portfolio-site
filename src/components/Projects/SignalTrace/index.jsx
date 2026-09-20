import './index.scss';
import React from 'react';
import { projects, categories, inChannel } from '../../../data/projects';

// Oscilloscope-style timeline: one horizontal channel per project category,
// with a square pulse at each project's `when` position. Clicking a pulse
// jumps to the project entry below.

const WIDTH = 860;
const LABEL_X = 8;
const TRACE_START = 150;
const TRACE_END = WIDTH - 30;
const PULSE_HALF_WIDTH = 22;
const PULSE_HEIGHT = 26;
const TOP_PAD = 42;
const ROW_PAD = 26;
const MIN_PULSE_GAP = PULSE_HALF_WIDTH * 2 + 8;
const TIER_HEIGHT = 15;
const LABEL_LIFT = 10;
const LABEL_CHAR_W = 6.9;
const LABEL_GAP = 10;

const buildChannelPath = (y, stamps, hw = PULSE_HALF_WIDTH, h = PULSE_HEIGHT, x0 = TRACE_START, x1 = TRACE_END) => {
    let d = `M ${x0} ${y}`;
    stamps.forEach(({ x }) => {
        d += ` L ${x - hw} ${y}`;
        d += ` L ${x - hw} ${y - h}`;
        d += ` L ${x + hw} ${y - h}`;
        d += ` L ${x + hw} ${y}`;
    });
    d += ` L ${x1} ${y}`;
    return d;
};

// Miniature single channel for the track chooser: one pulse per project, evenly
// spaced. A signature of how much work sits on the channel, not a timeline —
// the real time axis only appears once a track is selected.
const MINI = { w: 220, h: 40, hw: 7, pulse: 16, pad: 6 };

export const ChannelPreview = ({ categoryId }) => {
    const count = projects.filter((p) => inChannel(p, categoryId)).length;
    const step = (MINI.w - MINI.pad * 2) / (count + 1);
    const stamps = Array.from({ length: count }, (_, i) => ({ x: MINI.pad + step * (i + 1) }));
    const y = MINI.h - 8;

    return (
        <svg className="channel-preview" viewBox={`0 0 ${MINI.w} ${MINI.h}`} aria-hidden="true">
            <path
                className="channel-line"
                d={buildChannelPath(y, stamps, MINI.hw, MINI.pulse, MINI.pad, MINI.w - MINI.pad)}
            />
        </svg>
    );
};

// Pulses take their x from the year scale, but projects finished within weeks
// of each other land on top of one another. Push them apart to at least one
// pulse width, in chronological order, then pull the run back inside the right
// edge. Labels are then packed into as few stacked tiers as fit without
// touching, each tied to its pulse by a leader line.
// ponytail: single forward/backward pass, so a channel with more pulses than
// (TRACE_END - TRACE_START) / MIN_PULSE_GAP (~13) would re-collide. Cap or
// shrink MIN_PULSE_GAP if a category ever gets that dense.
const layoutChannel = (stamps) => {
    const sorted = [...stamps].sort((a, b) => a.x - b.x);

    for (let i = 1; i < sorted.length; i++) {
        sorted[i].x = Math.max(sorted[i].x, sorted[i - 1].x + MIN_PULSE_GAP);
    }
    for (let i = sorted.length - 1; i >= 0; i--) {
        const limit = i === sorted.length - 1
            ? TRACE_END - PULSE_HALF_WIDTH
            : sorted[i + 1].x - MIN_PULSE_GAP;
        sorted[i].x = Math.max(TRACE_START + PULSE_HALF_WIDTH, Math.min(sorted[i].x, limit));
    }

    const tierEnds = [];
    sorted.forEach((p) => {
        const halfW = (p.title.length * LABEL_CHAR_W) / 2;
        p.labelX = Math.min(Math.max(p.x, halfW + 4), WIDTH - halfW - 4);
        let tier = tierEnds.findIndex((end) => p.labelX - halfW >= end + LABEL_GAP);
        if (tier === -1) tier = tierEnds.push(0) - 1;
        tierEnds[tier] = p.labelX + halfW;
        p.tier = tier;
    });

    return { stamps: sorted, tiers: Math.max(tierEnds.length, 1) };
};

const SignalTrace = ({ activeCategory }) => {
    // Time domain always spans every project, even when a track filter narrows
    // which channels render — otherwise switching tracks rescales the x-axis
    // under you and the year ticks stop meaning the same thing between clicks.
    const times = projects.map((p) => p.when);
    const tMin = Math.min(...times) - 0.3;
    const tMax = Math.max(...times) + 0.3;
    const xFor = (t) => TRACE_START + ((t - tMin) / (tMax - tMin)) * (TRACE_END - TRACE_START);

    const visibleCategories = activeCategory
        ? categories.filter((c) => c.id === activeCategory)
        : categories;

    let cursor = TOP_PAD;
    const channels = visibleCategories.map((category) => {
        const { stamps, tiers } = layoutChannel(
            projects
                .filter((p) => inChannel(p, category.id, activeCategory === null))
                .map((p) => ({ ...p, x: xFor(p.when) })),
        );
        const labelTop = cursor;
        const y = labelTop + tiers * TIER_HEIGHT + LABEL_LIFT + PULSE_HEIGHT;
        cursor = y + ROW_PAD;
        return { category, stamps, tiers, labelTop, y };
    });

    const height = cursor - ROW_PAD + 12;

    const yearTicks = [];
    for (let year = Math.ceil(tMin); year <= Math.floor(tMax); year++) {
        yearTicks.push(year);
    }

    return (
        <div className="signal-trace" role="img" aria-label="Timeline of projects by category">
            <svg viewBox={`0 0 ${WIDTH} ${height}`} xmlns="http://www.w3.org/2000/svg">
                {yearTicks.map((year) => (
                    <g key={year} className="year-tick">
                        <line x1={xFor(year)} y1={TOP_PAD - 18} x2={xFor(year)} y2={height - 12} />
                        <text x={xFor(year)} y={TOP_PAD - 26}>{year}</text>
                    </g>
                ))}

                {channels.map(({ category, stamps, labelTop, y }) => (
                    <g key={category.id} className="channel">
                        <text className="channel-label" x={LABEL_X} y={y + 4}>
                            ch{category.index} · {category.id}
                        </text>
                        <path className="channel-line" d={buildChannelPath(y, stamps)} />
                        {stamps.map((p) => {
                            const labelY = labelTop + (p.tier + 1) * TIER_HEIGHT - 3;
                            return (
                                <a key={p.id} href={`#${p.id}`} className="pulse-link">
                                    <line
                                        className="pulse-leader"
                                        x1={p.labelX}
                                        y1={labelY + 4}
                                        x2={p.x}
                                        y2={y - PULSE_HEIGHT - 3}
                                    />
                                    <text className="pulse-label" x={p.labelX} y={labelY}>
                                        {p.title}
                                    </text>
                                    <rect
                                        className="pulse-hit"
                                        x={p.x - PULSE_HALF_WIDTH}
                                        y={y - PULSE_HEIGHT}
                                        width={PULSE_HALF_WIDTH * 2}
                                        height={PULSE_HEIGHT}
                                    />
                                </a>
                            );
                        })}
                    </g>
                ))}
            </svg>
        </div>
    );
};

export default SignalTrace;
