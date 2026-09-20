import './index.scss';
import React from 'react';
import { skills } from '../../../data/skills';

const Skills = () => {
    return (
        <section className="container skills">
            <header className="skills-index">
                <p className="mono-label">the toolbox</p>
                <h2>Skills</h2>
                <p className="skills-index-note">
                    The languages, frameworks, and infrastructure I reach for — built up
                    across research, co-ops, hackathons, and coursework.
                </p>
            </header>

            <div className="skills-grid">
                {skills.map((group) => (
                    <div key={group.id} className="skill-group">
                        <span className="mono-label group-label">{group.label}</span>
                        <p className="group-blurb">{group.blurb}</p>
                        <ul className="group-items">
                            {group.items.map((item) => (
                                <li key={item} className="tech-tag">{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
