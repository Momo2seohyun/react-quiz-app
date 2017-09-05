import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore, compose, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import firebase from './components/Fire'

import reducer from './reducers';
import App from './App';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'


injectTapEventPlugin();
const store = createStore(reducer, composeWithDevTools());

const requireAuth = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      let isAnonymous = user.isAnonymous;
      let uid = user.uid;
      browserHistory.push('/')
    } else {
      browserHistory.push('login')
    }
  })
}

const routes = {
  path: '/',
  childRoutes: [
    {
      component: App,
      onEnter: requireAuth,
      indexRoute: { component: Dashboard },
      childRoutes: [
        { path: 'dashboard', component: Dashboard },
      ]
    },
    { path: 'login', component: Login }
  ]
}

ReactDOM.render(
  <AppContainer>
    <MuiThemeProvider>
      <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
      </Provider>
    </MuiThemeProvider>
  </AppContainer>,
  document.getElementById('root'));

if (module.hot) module.hot.accept();