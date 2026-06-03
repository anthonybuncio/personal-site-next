'use client';

import { useState } from 'react';
import Link from 'next/link';

import routes from '@/data/routes';

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="hamburger-container">
      <nav className="main" id="hambuger-nav">
        <ul>
          {open ? (
            <li className="menu close-menu">
              <div onClick={() => setOpen(false)} className="menu-hover">&#10005;</div>
            </li>
          ) : (
            <li className="menu open-menu">
              <div onClick={() => setOpen(true)} className="menu-hover">&#9776;</div>
            </li>
          )}
        </ul>
      </nav>
      {open && (
        <div className="bm-menu-wrap" style={{ position: 'fixed', top: 0, right: 0, zIndex: 1100, height: '100%' }}>
          <div className="bm-menu" style={{ height: '100%' }}>
            <nav className="bm-item-list">
              <ul className="hamburger-ul">
                {routes.map((l) => (
                  <li key={l.label}>
                    <Link href={l.path} onClick={() => setOpen(false)}>
                      <h3 className={l.index ? 'index-li' : undefined}>{l.label}</h3>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
