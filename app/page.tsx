import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  description: "Anthony Buncio's personal website",
};

export default function Index() {
  return (
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link href="/"><span className="highlight">Software engineer. <br />Web developer. <br />Creator.</span></Link>
          </h2>
          <p>Welcome to my portfolio!</p>
        </div>
      </header>
      <p>
        Please feel free to read more <Link href="/about">about me</Link>, check
        out my <Link href="/resume">resume</Link>, view my{' '}
        <Link href="/projects">projects</Link>, or{' '}
        <Link href="/contact">contact</Link> me.
      </p>
      <p>
        Source available{' '}
        <a href="https://github.com/anthonybuncio/personal-site">here</a>.
      </p>
    </article>
  );
}
