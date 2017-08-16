import React, { Component } from "react";
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

class LessonOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true
    };
  }

  changeColor(e, color) {
    const value = e.target.value;
    this.setState({
      disabled: false
    })
    this.props.answerOne({
      color: value
    })
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.question} className={`${this.props.titleColor}`}>
          <h5>สีไหนไม่ใช่สีของธงชาติไทย ?</h5>
        </div>
        <div style={styles.answer}>
          <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" onChange={this.changeColor.bind(this)}>
            <RadioButton value="red" label="สีแดง" style={styles.radioButton} />
            <RadioButton value="white" label="สีขาว" style={styles.radioButton} />
            <RadioButton value="green" label="สีเขียว" style={styles.radioButton}/>
            <RadioButton value="blue" label="สีน้ำเงิน" style={styles.radioButton}/>
          </RadioButtonGroup>
        </div>
      </div>
    )
  }
}

const styles = {
  radioButton: {
    marginBottom: 16,
  },
  container: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  question: {
    display: 'flex',
    flexDirection: 'row',
    padding: '2em 1em'
  },
  answer: {
    padding: '2em 1em'
  }
};

export default LessonOne