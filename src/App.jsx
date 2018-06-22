import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Login from '~/views/Login';
import AuthProvider from '~/components/AuthContext';

import routes from './routes';

class App extends React.PureComponent {
  render() {
    return (
      <Router ref={(router) => { this.router = router; }}>
        <AuthProvider>
          <Switch>
            {routes}
            <Route component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    );
  }
}

export default App;
