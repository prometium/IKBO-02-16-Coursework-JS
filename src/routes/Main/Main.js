import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'src/components/AppBar';

function Main() {
  return (
    <>
      <AppBar title="Главная" />
      <section>
        <nav>
          <ul>
            <li>
              <Link to="/prometium">Красновский</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/alword">Слепушко</Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}

export default Main;
