import './reset.css';
import './base.css';

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

const Main = React.lazy(() => import('./routes/Main'));

function App() {
  return (
    <Router>
      <NavBar title="Главная" />
      <React.Suspense fallback={<div>Загрузка...</div>}>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
