import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import General from './components/General';
import Home from './components/Home';

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/general">General</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/general" component={General} />
    </div>
  </Router>
);

render(<BasicExample />, document.getElementById('root'));
