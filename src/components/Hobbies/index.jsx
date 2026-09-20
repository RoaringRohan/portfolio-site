import './index.scss';
import React from 'react';
import { hobbies } from '../../data/hobbies';

const HobbySection = ({ hobby }) => (
    <section className="hobby-section">
        <div className="hobby-rail">
            <span className="mono-label">{hobby.label}</span>
            <h2 className="hobby-title">{hobby.title}</h2>
        </div>

        <div className="hobby-body">
            <p className="hobby-summary">{hobby.summary}</p>

            {hobby.stats && (
                <dl className="hobby-stats">
                    {hobby.stats.map((stat) => (
                        <div key={stat.label} className="stat">
                            <dt className="mono-label">{stat.label}</dt>
                            <dd>{stat.value}</dd>
                        </div>
                    ))}
                </dl>
            )}

            {hobby.details?.map((detail) => (
                <div key={detail.heading} className="hobby-detail">
                    <h3>{detail.heading}</h3>
                    <p>{detail.body}</p>
                </div>
            ))}

            {hobby.links?.length > 0 && (
                <p className="hobby-links">
                    {hobby.links.map((link) => (
                        <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.label} &rarr;
                        </a>
                    ))}
                </p>
            )}
        </div>
    </section>
);

const Hobbies = () => {
    return (
        <div className="container hobbies">
            <header className="hobbies-masthead">
                <p className="mono-label">off the clock</p>
                <h1>Hobbies</h1>
            </header>

            {hobbies.map((hobby) => (
                <HobbySection key={hobby.id} hobby={hobby} />
            ))}
        </div>
    );
};

export default Hobbies;
