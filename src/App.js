import './reset.css';
import './base.css';

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Main = React.lazy(() => import('./routes/Main'));
const PrometiumPage = React.lazy(() => import('./routes/PrometiumPage'));
const LulusuzakuPage = React.lazy(() => import('./routes/LulusuzakuPage'));
const NarcologerPage = React.lazy(() => import('./routes/NarcologerPage'));


function App() {
  return (
    <Router>
      <React.Suspense fallback={<div>Загрузка...</div>}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/prometium" component={PrometiumPage} />
          <Route exact path="/Lulusuzaku" component={LulusuzakuPage} />
          <Route exact path="/Narcologer" component={NarcologerPage} />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
