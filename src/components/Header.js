import React from 'react';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1
        style={{
          fontSize: '2.4rem',
          fontWeight: '600',
          color: 'black',
          textAlign: 'left',
        }}
      >
        Math Magician
      </h1>
      <nav className="mein-links">
        <Link className="meinLink" to="/">Home</Link>
        <Link className="meinLink" to="/Calculator">Calculator</Link>
        <Link className="meinLink" to="/Quote">Quote</Link>
      </nav>
    </header>
  );
}

export default Header;
