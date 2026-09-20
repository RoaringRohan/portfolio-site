import './index.scss';
import React from 'react';
import Portrait from './Portrait';
import Skills from './Skills';
import { certifications } from '../../data/certifications';

// Microsoft's four-square mark, inlined so the badges need no external asset.
const MicrosoftMark = () => (
    <svg viewBox="0 0 23 23" width="12" height="12" aria-hidden="true" focusable="false">
        <rect x="1" y="1" width="10" height="10" fill="#f25022" />
        <rect x="12" y="1" width="10" height="10" fill="#7fba00" />
        <rect x="1" y="12" width="10" height="10" fill="#00a4ef" />
        <rect x="12" y="12" width="10" height="10" fill="#ffb900" />
    </svg>
);

const Home = () => {
    return (
        <div className="container home">
            <div className="container home-page loaded">
                <section className="hero">
                    <div className="text-zone">
                        <p className="mono-label">software // embedded // ml-ai</p>
                        <h1>
                            <span>Hey,</span>
                            <br />
                            <span>I'm Rohan!</span>
                        </h1>
                        <h2>Software Engineer &amp; AI/ML Developer</h2>
                        <p className="hero-meta">
                            MEng, Electrical &amp; Computer Engineering — University of Toronto
                            <br />
                            BESc, Software Engineering — Western University
                        </p>
                        <ul className="hero-certs">
                            {certifications.map((cert) => (
                                <li key={cert.code}>
                                    <a
                                        href={cert.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title={cert.name}
                                        aria-label={cert.name}
                                    >
                                        <MicrosoftMark />
                                        {cert.code}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="portrait">
                        <Portrait />
                    </div>
                </section>
                <Skills />
            </div>
        </div>
    );
}

export default Home;
