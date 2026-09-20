import '../index.scss';
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { posts } from '../../../data/posts';

const formatDate = (iso) =>
    iso ? new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '';

const Post = () => {
    const { slug } = useParams();
    const post = posts.find((p) => p.slug === slug);

    if (!post) return <Navigate to="/blog" replace />;

    return (
        <div className="container blog-page">
            <Link to="/blog" className="blog-back mono-label">&larr; All posts</Link>

            <article className="post-full">
                <header className="post-full-header">
                    <p className="post-preview-date mono-label">{formatDate(post.date)}</p>
                    <h1>{post.title}</h1>
                    {post.tags?.length > 0 && (
                        <ul className="entry-tags">
                            {post.tags.map((tag) => (
                                <li key={tag} className="tech-tag">{tag}</li>
                            ))}
                        </ul>
                    )}
                </header>

                <div className="post-body" dangerouslySetInnerHTML={{ __html: post.html }} />
            </article>
        </div>
    );
};

export default Post;
