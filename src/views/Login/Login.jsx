import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import ErrorBoundary from '~/components/ErrorBoundary';

import { AuthConsumer } from '~/components/AuthContext';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  submit: {
    display: 'none',
  },
});

const Login = props => (
  <AuthConsumer>
    {({
      login,
      handleChange,
      username,
      password,
      error,
    }) => (
      <ErrorBoundary>
        <h1>
          Login
        </h1>
        <form
          className={props.classes.container}
          noValidate
          autoComplete='off'
        >
          <TextField
            id='username'
            label='Username'
            className={props.classes.textField}
            onChange={handleChange}
            error={error && error.includes('username')}
            type='text'
            value={username}
          />
          <TextField
            id='password'
            label='Password'
            className={props.classes.textField}
            onChange={handleChange}
            error={error && error.includes('password')}
            type='password'
            value={password}
          />
          <Button
            color='primary'
            variant='raised'
            onClick={login}
            className={props.classes.button}
          >
            Login
          </Button>
          <input
            className={props.classes.submit}
            visibility='hidden'
            display='none'
            type='submit'
            onClick={login}
          />
        </form>
      </ErrorBoundary>
    )}
  </AuthConsumer>
);

Login.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired,
    submit: PropTypes.string.isRequired,
    textField: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
  }).isRequired,
};

Login.displayName = 'Login';

export default withStyles(styles)(Login);
