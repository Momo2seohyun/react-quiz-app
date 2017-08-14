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
    this.props.anwswerOne({
      color: value
    })
  }

  render() {
    return (
      <div>
        <p>สีไหนไม่ใช่สีของธงชาติไทย</p>
        <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" onChange={this.changeColor.bind(this)}>
          <RadioButton value="red" label="สีแดง" style={styles.radioButton} />
          <RadioButton value="white" label="สีขาว" style={styles.radioButton} />
          <RadioButton value="green" label="สีเขียว" style={styles.radioButton}/>
          <RadioButton value="blue" label="สีน้ำเงิน" style={styles.radioButton}/>
        </RadioButtonGroup>
      </div>
    )
  }
}

const styles = {
  radioButton: {
    marginBottom: 16,
  },
};

export default LessonOne