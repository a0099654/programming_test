import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';

import registerServiceWorker from '../registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Main from './components/Main';
import Musics from './components/Musics';
import Posts from './components/Posts';
import HomePage from './components/HomePage';

injectTapEventPlugin();

const Root = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={HomePage}></IndexRoute>
        <Route path="musics" component={Musics}></Route>
        <Route path="posts" component={HomePage}></Route>
      </Route>
    </Router>
  )
}

ReactDOM.render(
  <Root/>, document.getElementById('root'));

registerServiceWorker();
