"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import ContactIcons from "../Contact/ContactIcons";

const date = new Date().getFullYear();

const SideBar = () => {
  const pathname = usePathname();

  return (
    <section id="sidebar">
      <section id="intro">
        <Link href="/" className="logo">
          <img src="/images/me.png" alt="" />
        </Link>
        <header>
          <h2>Anthony Buncio</h2>
          <p>
            <a href="mailto:anthonybuncio.work@gmail.com">
              anthonybuncio.work@gmail.com
            </a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>
          Hi! I&apos;m Anthony, an <a href="https://hccs.edu/">HCC</a> graduate,{" "}
          <a href="https://www.coursereport.com/schools/the-iron-yard">
            Iron Yard
          </a>{" "}
          coding bootcamp alumni, and currently the Full Stack Data & Analytics
          Engineer at <a href="https://lottery.com/">Lottery.com</a>. My
          previous professional experience includes various management positions
          within Hawaii and Texas for{" "}
          <a href="https://focusbrands.com/">Focus Brands</a> and{" "}
          <a href="https://simplyhempwellness.com/">Simply Hemp</a>.
          <br />
          <br />
        </p>
        <ul className="actions">
          <li>
            {!pathname.includes("/resume") ? (
              <Link href="/resume" className="button">
                Learn More
              </Link>
            ) : (
              <Link href="/about" className="button">
                Learn More
              </Link>
            )}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; {date} Anthony Buncio <Link href="/">anthonybuncio.com</Link>.
        </p>
      </section>
    </section>
  );
};

export default SideBar;
