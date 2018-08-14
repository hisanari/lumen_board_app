import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import BoardPages from './BoardPages';
import AboutPage from './AboutPage';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={BoardPages} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </div>
  </Router>
);

export default App;
