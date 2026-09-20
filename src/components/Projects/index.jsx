import './index.scss';
import React, { useState } from 'react';
import SignalTrace, { ChannelPreview } from './SignalTrace';
import { projects, categories, inChannel } from '../../data/projects';

const categoryById = Object.fromEntries(categories.map((c) => [c.id, c]));

// `section` is the channel this copy is rendering under. The badges name the
// project's other channels, so a cross-track entry reads as cross-track from
// whichever section you found it in.
const ProjectEntry = ({ project, section }) => {
  const otherChannels = [project.category, ...(project.tracks ?? [])].filter((id) => id !== section);

  return (
    <article className="project-entry" id={project.id}>
        <header className="entry-header">
            <div className="entry-title-block">
                <h3 className="entry-title">{project.title}</h3>
                {project.award && <p className="entry-award">★ {project.award}</p>}
            </div>
            <p className="entry-context mono-label">
                {project.context} · {project.date}
            </p>
            {(project.sprint || otherChannels.length > 0) && (
                <ul className="entry-badges">
                    {project.sprint && (
                        <li className="entry-badge entry-badge--sprint">{project.sprint}</li>
                    )}
                    {otherChannels.map((trackId) => (
                        <li key={trackId} className="entry-badge entry-badge--track">
                            {categoryById[trackId]?.label ?? trackId}
                        </li>
                    ))}
                </ul>
            )}
        </header>

        <p className="entry-summary">{project.summary}</p>

        {project.pipeline && (
            <div className="entry-pipeline">
                <span className="mono-label pipeline-label">pipeline</span>
                <div className="pipeline-stages">
                    {project.pipeline.map((stage, i) => (
                        <React.Fragment key={stage}>
                            {i > 0 && <span className="pipeline-arrow" aria-hidden="true">&rarr;</span>}
                            <span className="pipeline-stage">{stage}</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        )}

        {project.images?.length > 0 && (
            <div className="entry-shots">
                {project.images.map((shot) => (
                    <img key={shot.src} className="entry-shot" src={shot.src} alt={shot.alt} loading="lazy" />
                ))}
            </div>
        )}

        <footer className="entry-footer">
            <ul className="entry-tags">
                {project.tech.map((tag) => (
                    <li key={tag} className="tech-tag">{tag}</li>
                ))}
            </ul>
            <div className="entry-links">
                {project.links?.devpost && (
                    <a href={project.links.devpost} target="_blank" rel="noopener noreferrer" className="entry-link">
                        Devpost &rarr;
                    </a>
                )}
                {project.links?.demo && (
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="entry-link">
                        Visit site &rarr;
                    </a>
                )}
                {project.links?.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="entry-link">
                        View source &rarr;
                    </a>
                )}
            </div>
        </footer>
    </article>
  );
};

// Landing state: nothing is on screen until a channel is picked. Each card is
// the channel itself — index, blurb and a miniature trace of how many pulses
// sit on it.
const TrackChooser = ({ onPick }) => (
    <div className="track-chooser">
        <p className="chooser-prompt mono-label">
            four channels, idle. select one to bring its work on screen
        </p>
        <div className="chooser-grid">
            {categories.map((category) => {
                const count = projects.filter((p) => inChannel(p, category.id)).length;
                return (
                    <button
                        key={category.id}
                        type="button"
                        className="chooser-card"
                        onClick={() => onPick(category.id)}
                    >
                        <span className="chooser-index mono-label">ch{category.index}</span>
                        <span className="chooser-label">{category.label}</span>
                        <span className="chooser-blurb">{category.blurb}</span>
                        <ChannelPreview categoryId={category.id} />
                        <span className="chooser-count mono-label">
                            {count} {count === 1 ? 'project' : 'projects'} &rarr;
                        </span>
                    </button>
                );
            })}
        </div>
        <button type="button" className="chooser-all mono-label" onClick={() => onPick('all')}>
            or scope all four channels at once
        </button>
    </div>
);

const Projects = () => {
    // null = nothing picked yet (chooser), 'all' = every channel, otherwise a
    // single category id.
    const [activeCategory, setActiveCategory] = useState(null);
    const visibleCategories = activeCategory && activeCategory !== 'all'
        ? categories.filter((c) => c.id === activeCategory)
        : categories;

    return (
        <div className="container projects-page">
            <header className="projects-masthead">
                <p className="mono-label">selected work</p>
                <h1>Projects</h1>
                <p className="projects-note">
                    Four tracks of work: software systems, embedded hardware, machine
                    learning and quantitative finance, often meeting in the same build.
                </p>
            </header>

            {activeCategory === null ? (
                <TrackChooser onPick={setActiveCategory} />
            ) : (
                <>
                    <div className="track-filter" role="tablist" aria-label="Filter projects by track">
                        <button
                            type="button"
                            className="track-pill track-pill--reset"
                            onClick={() => setActiveCategory(null)}
                        >
                            &larr; channels
                        </button>
                        <button
                            type="button"
                            role="tab"
                            aria-selected={activeCategory === 'all'}
                            className={`track-pill ${activeCategory === 'all' ? 'active' : ''}`}
                            onClick={() => setActiveCategory('all')}
                        >
                            All
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                type="button"
                                role="tab"
                                aria-selected={activeCategory === category.id}
                                className={`track-pill ${activeCategory === category.id ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>

                    <SignalTrace activeCategory={activeCategory === 'all' ? null : activeCategory} />

                    {visibleCategories.map((category) => {
                        const entries = projects.filter(
                            (p) => inChannel(p, category.id, activeCategory === 'all'),
                        );
                        if (entries.length === 0) return null;

                        return (
                            <section key={category.id} className="project-category">
                                <div className="category-rail">
                                    <span className="category-index mono-label">{category.index}</span>
                                    <h2 className="category-title">{category.label}</h2>
                                    <p className="category-blurb">{category.blurb}</p>
                                </div>
                                <div className="category-entries">
                                    {entries.map((project) => (
                                        <ProjectEntry key={project.id} project={project} section={category.id} />
                                    ))}
                                </div>
                            </section>
                        );
                    })}
                </>
            )}
        </div>
    );
}

export default Projects;
