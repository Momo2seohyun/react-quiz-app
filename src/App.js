import React, { Component } from "react";
import { connect } from 'react-redux';
import AppBar from "material-ui/AppBar";
import Avatar from "material-ui/Avatar";
import IconMenu from "material-ui/IconMenu";
import IconButton from "material-ui/IconButton";
import MenuItem from "material-ui/MenuItem";
import CircularProgress from 'material-ui/CircularProgress';

import { AddUser } from './actions'
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: true
    };
  }

  componentDidUpdate() {
    const userId = firebase.auth().currentUser.uid;
    return firebase.database().ref('/users/' + userId).once('value')
      .then((value) => {
        let displayName = value.val().displayName
        this.props.dispatch(AddUser(displayName))
      });
  }

  isSignOut() {
    let self = this;
    firebase.auth().signOut().then(result => { });
  }

  render() {
    const loading = this.props;
    const displayName = this.props.user;
    return (
      <div>
        {!displayName
          ? <div style={styles.loading}><CircularProgress size={300} /></div>
          : <div><AppBar
            showMenuIconButton={false}
            title={displayName}
            iconElementRight={
              <IconMenu
                iconButtonElement={
                  <IconButton style={{ padding: "0" }}>
                    <Avatar size={30} />
                  </IconButton>
                }
                targetOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "top" }}
              >
                <MenuItem
                  primaryText="Sign out"
                  onTouchTap={this.isSignOut.bind(this)}
                />
              </IconMenu>
            }
          />{this.props.children}</div>
        }
      </div >
    );
  }
}

const styles = {
  loading: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  }
}

export const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App);
