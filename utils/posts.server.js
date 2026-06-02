import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const POSTS_DIR = path.join(process.cwd(), 'content/blog');

export async function getAllPostsMeta() {
  const files = await fs.readdir(POSTS_DIR);
  const posts = await Promise.all(
    files
      .filter((f) => f.endsWith('.md'))
      .map(async (filename) => {
        const raw = await fs.readFile(path.join(POSTS_DIR, filename), 'utf8');
        const { data } = matter(raw);
        return {
          ...data,
          date: data.date ? String(data.date) : '',
          slug: filename.replace(/\.md$/, ''),
        };
      })
  );
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getPostBySlug(slug) {
  const filepath = path.join(POSTS_DIR, `${slug}.md`);
  const raw = await fs.readFile(filepath, 'utf8');
  const { data, content } = matter(raw);
  const html = marked.parse(content);
  return {
    meta: {
      ...data,
      date: data.date ? String(data.date) : '',
      slug,
    },
    html,
  };
}
