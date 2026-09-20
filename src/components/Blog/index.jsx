import './index.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../../data/posts';

const formatDate = (iso) =>
    iso ? new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '';

const PostPreview = ({ post }) => (
    <article className="post-preview">
        <Link to={`/blog/${post.slug}`} className="post-preview-link">
            <p className="post-preview-date mono-label">{formatDate(post.date)}</p>
            <h2 className="post-preview-title">{post.title}</h2>
            {post.summary && <p className="post-preview-summary">{post.summary}</p>}
            {post.tags?.length > 0 && (
                <ul className="entry-tags">
                    {post.tags.map((tag) => (
                        <li key={tag} className="tech-tag">{tag}</li>
                    ))}
                </ul>
            )}
        </Link>
    </article>
);

const Blog = () => {
    return (
        <div className="container blog-page">
            <header className="blog-masthead">
                <p className="mono-label">notes</p>
                <h1>Blog</h1>
                <p className="blog-note">
                    Software engineering architectural designs, written up as I learn them.
                </p>
            </header>

            {posts.length > 0 ? (
                <div className="post-list">
                    {posts.map((post) => (
                        <PostPreview key={post.slug} post={post} />
                    ))}
                </div>
            ) : (
                <p className="blog-empty">Nothing posted yet.</p>
            )}
        </div>
    );
};

export default Blog;
