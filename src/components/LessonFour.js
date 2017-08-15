import React, { Component } from "react";
import FlatButton from 'material-ui/FlatButton';

class LessonFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      bgTrue: styles.btnMargin,
      bgFalse: styles.btnMargin
    };
  }

  handleTrue() {
    this.setState({
      disabled: false,
      bgTrue: styles.bgTrue,
      bgFalse: styles.btnMargin
    })
    this.props.answerFour({
      answer: true
    })
  }

  handlefalse() {
    this.setState({
      disabled: false,
      bgFalse: styles.bgFalse,
      bgTrue: styles.btnMargin,
    })
    this.props.answerFour({
      answer: false
    })
  }

  render() {
    return (
      <div>
        <p>เลือดมนุษย์มีสีแดง ?</p>
        <div style={styles.btn}>
          <FlatButton label="True" onTouchTap={this.handleTrue.bind(this)} rippleColor="green" style={this.state.bgTrue} />
          <FlatButton label="False" onTouchTap={this.handlefalse.bind(this)} rippleColor="red" style={this.state.bgFalse} />
        </div>
      </div>
    )
  }
}

const styles = {
  btn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  btnMargin: {
    margin: '0em 1em',
  },
  bgFalse: {
    backgroundColor: '#ff5252',
    color: 'white',
    margin: '0em 1em',
  },
  bgTrue: {
    backgroundColor: '#00e676',
    color: 'white',
    margin: '0em 1em',
  }
}

export default LessonFour