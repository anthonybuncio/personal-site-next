import type { Metadata } from 'next';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import Markdown from 'markdown-to-jsx';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Anthony Buncio',
};

export default function About() {
  const markdown = fs.readFileSync(path.join(process.cwd(), 'data/about.md'), 'utf8');

  const count = markdown
    .split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

  return (
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2><Link href="/about">About Me</Link></h2>
          <p>(in about {count} words)</p>
        </div>
      </header>
      <Markdown>{markdown}</Markdown>
    </article>
  );
}
