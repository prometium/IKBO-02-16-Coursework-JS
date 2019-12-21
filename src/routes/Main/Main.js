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
            <li>
              <Link to="/Lulusuzaku">Очеретная</Link>
            </li>
            <li>
              <Link to="/Narcologer">Вельтищев</Link>
            </li>
            <li>
              <Link to="/GlebSuvakin">Сувакин</Link>
            </li>
            <li>
              <Link to="/Vezlim">Цепковский</Link>
            </li>
            <li>
              <Link to="/LegendCreoMod">Иваненко</Link>
            </li>
            <li>
              <Link to="/StasPotapov">Потапов</Link>
            </li>
            <li>
              <Link to="/Justalgit">Ларин</Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}

export default Main;
