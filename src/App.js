import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';

import CircularProgress from 'material-ui/CircularProgress';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  isSignOut() {
    let self = this;
    firebase.auth().signOut()
      .then((result) => {
      })
    }

  render() {
    return(
      <div>
        <AppBar
          showMenuIconButton={false}
          title="Quiz"
          iconElementRight={
            <IconMenu
            iconButtonElement={
              <IconButton style={{ padding: '0' }}>
                <Avatar size={30}/>
                </IconButton>
                }
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
              <MenuItem primaryText="Sign out" onTouchTap={this.isSignOut.bind(this)}/>
            </IconMenu>
          }
        />
          {this.state.loading ? 
          <CircularProgress size={100} />
          : this.props.children
          }
      </div>
    )
  }
}

export default App;