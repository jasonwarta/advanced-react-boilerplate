import React from 'react';
import { graphql } from 'react-apollo';
import { AUTH_TOKEN } from '~/constants';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import { LOGIN } from '~/utils/mutations';

const AuthContext = React.createContext();

class AuthProvider extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    loggedIn: false || (localStorage.getItem(AUTH_TOKEN) !== null),
    username: '',
    password: '',
    error: null,
  };

  login = async (e) => {
    e.preventDefault();

    const { login, history } = this.props;
    const { username, password } = this.state;

    localStorage.removeItem(AUTH_TOKEN);
    this.setState({ error: null });

    const result = await login({
      variables: { username, password },
    }).catch((err) => {
      this.setState({ error: err.message.split(':')[1] });
    });
    if (result) {
      this.setState({ loggedIn: true }, () => {
        localStorage.setItem(AUTH_TOKEN, result.data.login.token);
        history.push('/company');
      });
    }
  }

  logout() {
    this.setState({ loggedIn: false });
    localStorage.removeItem(AUTH_TOKEN);
  }

  handleChange(e) {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  }

  render() {
    const { children } = this.props;
    const {
      loggedIn,
      username,
      password,
      error,
    } = this.state;
    return (
      <AuthContext.Provider
        value={{
          loggedIn,
          login: this.login,
          logout: this.logout,
          handleChange: this.handleChange,
          username,
          password,
          error,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
}

AuthProvider.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  login: PropTypes.func.isRequired,
};

const AuthConsumer = AuthContext.Consumer;

export { AuthConsumer };

export default graphql(LOGIN, { name: 'login' })(withRouter(AuthProvider));
