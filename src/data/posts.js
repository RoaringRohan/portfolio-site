// Blog posts. To add one, drop a markdown file into `src/content/posts/` —
// filename becomes the slug, frontmatter becomes the metadata, the rest of
// the file is the body. No component edit, no route, no import: the glob
// below picks it up at build time the same way `projects.js` is hand-authored
// data, except here the data is files instead of an array literal.
//
// Frontmatter:
//   title    post title
//   date     ISO date string (YYYY-MM-DD) — also sorts the list, newest first
//   tags     optional array, e.g. [Rust, Concurrency]
//   summary  1-2 sentence teaser shown on the list page

import { marked } from 'marked';

const files = import.meta.glob('../content/posts/*.md', { eager: true, query: '?raw', import: 'default' });

const parseFrontmatter = (raw) => {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };

  const [, frontmatter, body] = match;
  const meta = {};
  frontmatter.split('\n').forEach((line) => {
    const i = line.indexOf(':');
    if (i === -1) return;
    const key = line.slice(0, i).trim();
    let value = line.slice(i + 1).trim();
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value.slice(1, -1).split(',').map((s) => s.trim()).filter(Boolean);
    }
    meta[key] = value;
  });
  return { meta, body };
};

export const posts = Object.entries(files)
  .map(([path, raw]) => {
    const slug = path.split('/').pop().replace(/\.md$/, '').replace(/^\d{4}-\d{2}-/, '');
    const { meta, body } = parseFrontmatter(raw);
    return {
      slug,
      title: meta.title ?? slug,
      date: meta.date ?? '',
      tags: meta.tags ?? [],
      summary: meta.summary ?? '',
      html: marked.parse(body.trim()),
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));
