import type { Metadata } from 'next';
import Link from 'next/link';

import Cell from '@/components/Projects/Cell';
import data from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description: "Learn about Anthony Buncio's projects.",
};

export default function Projects() {
  return (
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2><Link href="/projects">Projects</Link></h2>
          <p>A selection of projects that I&apos;m not too ashamed of</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell data={project} key={project.title} />
      ))}
    </article>
  );
}
