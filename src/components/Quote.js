import React from 'react';

import Header from './Header';

function Quote() {
  return (
    <>
      <Header />
      <div>
        <h3>Welcome to our page!</h3>
      </div>
      <section className="descr">
        <div>
          <p className="quote">
            Mathmatics is not about numbers,eauations, computations,
            or algorithms: it is about understanding.
            <span className="quspan">-William Paul Thurston</span>
          </p>
        </div>
      </section>
    </>
  );
}

export default Quote;
