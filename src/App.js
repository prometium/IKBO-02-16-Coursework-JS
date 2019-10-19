import './reset.css';
import './base.css';

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Main = React.lazy(() => import('./routes/Main'));

function App() {
  return (
    <Router>
      <React.Suspense fallback={<div>Загрузка...</div>}>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
