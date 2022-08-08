import React from 'react';

import Header from './Header';

function Quote() {
  return (
    <>
      <Header />
      <section>
        <div>
          <h2>Welcome to our page!</h2>
        </div>
        <div>
          <p>
            Mathmatics is not about numbers,eauations, computations,
            or algorithms: it is about understanding.
            <span>-William Paul Thurston</span>
          </p>
        </div>
      </section>
    </>
  );
}

export default Quote;
