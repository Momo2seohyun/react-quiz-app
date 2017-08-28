import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import Avatar from 'material-ui/Avatar';
import { Card, CardActions } from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import LockIcon from 'material-ui/svg-icons/action/lock-outline';

import { AddUser } from '../actions'
import { Required, isLetter } from '../helpers/validate'
import './Pages.css'

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInError: false,
      loaded: true
    }

    this.login = this.login.bind(this)
    this.closeSnackBar = this.closeSnackBar.bind(this)
  }
  login(props) {
    let displayName = props.displayName
    let self = this

    this.setState({
      loaded: false
    })

    firebase.auth().signInAnonymously()
      .then((respons) => {
        // firebase.database().ref('/users/' + respons.uid).set({
        //   displayName: displayName
        // });
        self.setState({
          signInError: false,
          loaded: true
        })
      })
      .catch((error) => {
        self.setState({
          signInError: error,
          loaded: true
        })
      });
  }

  closeSnackBar() {
    this.setState({ signInError: false })
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <div style={styles.main}>
        {!this.state.loaded ?
          <CircularProgress size={100} />
          : <Card className="loginCard">
            <div style={styles.avatar}>
              <Avatar icon={<LockIcon />} size={60} />
            </div>

            {
              this.state.signInError &&
              <Snackbar
                open={true}
                autoHideDuration={4000}
                message={this.state.signInError.message}
                onRequestClose={this.closeSnackBar} />
            }

            <form onSubmit={handleSubmit(this.login)} style={styles.form}>
              <Field
                name="displayName"
                component={TextField}
                floatingLabelText="Display Name"
                validate={[Required, isLetter]}
                fullWidth={true}
              />
              <div style={styles.formBotton}>
                <RaisedButton
                  type="submit"
                  disabled={pristine || submitting}
                  label="Login"
                  primary={true}
                />
              </div>
            </form>
          </Card>
        }

      </div>
    )
  }
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    margin: '1em',
    textAlign: 'center',
  },
  form: {
    padding: '0 1em 1em 1em',
  },
  input: {
    display: 'flex',
  },
  centered: {
    textAlign: 'center'
  },
  formBotton: {
    textAlign: 'right',
  }
}

export const LoginForm = {
  form: 'login'
};

const LoginReduxForm = reduxForm(LoginForm)(Login)

export default connect()(LoginReduxForm)