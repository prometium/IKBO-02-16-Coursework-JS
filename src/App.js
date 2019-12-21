import './reset.css';
import './base.css';

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Main = React.lazy(() => import('./routes/Main'));
const PrometiumPage = React.lazy(() => import('./routes/PrometiumPage'));
const LulusuzakuPage = React.lazy(() => import('./routes/LulusuzakuPage'));
const NarcologerPage = React.lazy(() => import('./routes/NarcologerPage'));
const GlebSuvakinPage = React.lazy(() => import('./routes/GlebSuvakinPage'));
const VezlimPage = React.lazy(() => import('./routes/VezlimPage'));
const LegendCreoModPage = React.lazy(() => import('./routes/LegendCreoModPage'));
const StasPotapovPage = React.lazy(() => import('./routes/StasPotapovPage'));
const JustalgitPage = React.lazy(() => import('./routes/JustalgitPage'));
const Wo1kowskyPage = React.lazy(() => import('./routes/Wo1kowskyPage'));


function App() {
  return (
    <Router>
      <React.Suspense fallback={<div>Загрузка...</div>}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/prometium" component={PrometiumPage} />
          <Route exact path="/Lulusuzaku" component={LulusuzakuPage} />
          <Route exact path="/Narcologer" component={NarcologerPage} />
          <Route exact path="/GlebSuvakin" component={GlebSuvakinPage} />
          <Route exact path="/Vezlim" component={VezlimPage} />
          <Route exact path="/LegendCreoMod" component={LegendCreoModPage} />
          <Route exact path="/StasPotapov" component={StasPotapovPage} />
          <Route exact path="/Justalgit" component={JustalgitPage} />
          <Route exact path="/Wo1kowsky" component={Wo1kowskyPage} />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
