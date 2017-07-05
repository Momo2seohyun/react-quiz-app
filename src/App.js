import React, { Component } from "react";

import AppBar from "material-ui/AppBar";
import Avatar from "material-ui/Avatar";
import IconMenu from "material-ui/IconMenu";
import IconButton from "material-ui/IconButton";
import MenuItem from "material-ui/MenuItem";
import LinearProgress from "material-ui/LinearProgress";

import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: true
    };
  }

  isSignOut() {
    let self = this;
    firebase.auth().signOut().then(result => {});
  }

  render() {
    const loading = this.props.children;
    return (
      <div>
        <AppBar
          showMenuIconButton={false}
          title="Quiz"
          iconElementRight={
            !loading
              ? <LinearProgress />
              : <IconMenu
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
        />
        {!loading
          ? <LinearProgress mode="indeterminate" />
          : this.props.children}
      </div>
    );
  }
}

export default App;
