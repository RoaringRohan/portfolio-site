import './index.scss';
import React from 'react';
import { experience } from '../../data/experience';

// Career history rendered as a version-control commit log: each role is a
// "commit" on the branch line, newest first, with the current role at HEAD.

const CommitEntry = ({ entry, isHead }) => (
    <article className="commit-entry">
        <div className="commit-marker" aria-hidden="true" />

        <p className="commit-line">
            <span className="commit-hash">commit {entry.commit}</span>
            <span className="commit-branch">{entry.id}</span>
            {isHead && <span className="commit-head">HEAD</span>}
        </p>

        <h2 className="commit-role">{entry.role}</h2>
        <p className="commit-meta">
            {entry.organization} · {entry.location} · {entry.start} — {entry.end}
            {entry.link && (
                <>
                    {' · '}
                    <a href={entry.link.href} target="_blank" rel="noopener noreferrer" className="commit-link">
                        {entry.link.label} &rarr;
                    </a>
                </>
            )}
        </p>

        <p className="commit-summary">{entry.summary}</p>

        <ul className="commit-diff">
            {entry.highlights.map((highlight) => (
                <li key={highlight}>
                    <span className="diff-plus" aria-hidden="true">+</span>
                    {highlight}
                </li>
            ))}
        </ul>

        <ul className="commit-tags">
            {entry.tech.map((tag) => (
                <li key={tag} className="tech-tag">{tag}</li>
            ))}
        </ul>
    </article>
);

const Work = () => {
    // Only one commit can be HEAD: the newest current role. Other concurrent
    // roles stay marked 'Present' by their dates.
    const headId = experience.find((entry) => entry.current)?.id;

    return (
        <div className="container work">
            <header className="work-masthead">
                <p className="mono-label">git log --career</p>
                <h1>Work</h1>
            </header>

            <div className="commit-log">
                {experience.map((entry) => (
                    <CommitEntry key={entry.id} entry={entry} isHead={entry.id === headId} />
                ))}
            </div>
        </div>
    );
}

export default Work;
