import React, { Component } from "react";
import TextField from 'material-ui/TextField';

class FieldQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true
    };
  }

  handleChange(e, answer) {
    const value = e.target.value;
    this.setState({
      disabled: false
    })
    this.props.answerField({
      answer: value
    })
  }

  render() {
    let { data } = this.props
    return (
      <div style={styles.container}>
        <div style={styles.question} className={`${this.props.titleColor}`}>
          <h5>{data.question}</h5>
        </div>
        <div style={styles.answer}>
          <TextField hintText="Fill in the Blank" onChange={this.handleChange.bind(this)} />
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  question: {
    display: 'flex',
    flexDirection: 'row',
    padding: '2em 1em'
  },
  answer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '2em 1em'
  }
};

export default FieldQuestion