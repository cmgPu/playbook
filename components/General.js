import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Home';

import BkgImgCover from './general/background-image-cover';

const General = () => (
  <div>
    <h2>General</h2>
    <Router>
    <div>
      <ul>
        <li><Link to="/general/bkg">Background Image Cover</Link></li>
      </ul>

      <hr />
      <Route path="/general/bkg" component={BkgImgCover} />
    </div>
  </Router>
  </div>
);

export default General;
