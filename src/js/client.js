import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';

import Main from './components/Main';
import Musics from './components/Musics';
import HomePage from './components/HomePage';

const Root = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={HomePage}></IndexRoute>
        <Route path="musics" component={Musics}></Route>
        <Route path="posts" component={HomePage}></Route>
      </Route>
    </Router>
  );
};

ReactDOM.render(
  <Root/>, document.getElementById('root'));
