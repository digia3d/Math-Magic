import React from 'react';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1 className="mein-title">Math Magician</h1>
      <nav className="mein-links">
        <Link className="meinLink" to="/">Home</Link>
        <Link className="meinLink" to="/Calculator">Calculator</Link>
        <Link className="meinLink" to="/Quote">Quote</Link>
      </nav>
    </header>
  );
}

export default Header;
