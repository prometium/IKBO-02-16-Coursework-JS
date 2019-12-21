import './reset.css';
import './base.css';

import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const Main = React.lazy(() => import('./routes/Main'));
const PrometiumPage = React.lazy(() => import('./routes/PrometiumPage'));
const Wo1kowskyPage = React.lazy(() => import('./routes/Wo1kowskyPage'));

function App() {
    return (
        <Router>
            <React.Suspense fallback={<div>Загрузка...</div>}>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/prometium" component={PrometiumPage}/>
                    <Route exact path="/wo1kowsky" component={Wo1kowskyPage}/>
                </Switch>
            </React.Suspense>
        </Router>
    );
}
export default App;
