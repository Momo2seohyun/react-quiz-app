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
      <div style={styles.container}>
        <div style={styles.question} className={`${this.props.titleColor}`}>
          <h5>เลือดมนุษย์มีสีแดง ?</h5>
        </div>
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
    justifyContent: 'center',
    padding: '2em 1em'
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
  },
  container: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  question: {
    display: 'flex',
    flexDirection: 'row',
    padding: '2em 1em'
  }
}

export default LessonFour