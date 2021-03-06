import React, { Component } from "react";
import Checkbox from 'material-ui/Checkbox';

class CheckboxQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      checkO: false,
      checkA: false,
      checkB: false,
      checkC: false,
      checkD: false,
    };
  }

   updateCheck(label, e, answer) {
   	if(label === "O") {
   		this.setState({disabled: false, checkO: answer})
   		this.props.answerCheckbox({
	    	groupO: answer,
	    	groupA: this.state.checkA,
	    	groupB: this.state.checkB,
	    	groupC: this.state.checkC,
	    	groupD: this.state.checkD
	    })
   	} else if (label === "A") {
   		this.setState({disabled: false, checkA: answer})
   		this.props.answerCheckbox({
	    	groupO: this.state.checkO,
	    	groupA: answer,
	    	groupB: this.state.checkB,
	    	groupC: this.state.checkC,
	    	groupD: this.state.checkD
	    })
   	} else if (label === "B") {
   		this.setState({disabled: false, checkB: answer})
   		this.props.answerCheckbox({
	    	groupO: this.state.checkO,
	    	groupA: this.state.checkA,
	    	groupB: answer,
	    	groupC: this.state.checkC,
	    	groupD: this.state.checkD
	    })
   	} else if (label === "C") {
   		this.setState({disabled: false, checkC: answer})
   		this.props.answerCheckbox({
	    	groupO: this.state.checkO,
	    	groupA: this.state.checkA,
	    	groupB: this.state.checkB,
	    	groupC: answer,
	    	groupD: this.state.checkD
	    })
   	} else if (label === "D") {
   		this.setState({disabled: false, checkD: answer})
   		this.props.answerCheckbox({
	    	groupO: this.state.checkO,
	    	groupA: this.state.checkA,
	    	groupB: this.state.checkB,
	    	groupC: this.state.checkC,
	    	groupD: answer
	    })
   	}
  }

  render() {
    let { data } = this.props
    return (
      <div style={styles.container}>
        <div style={styles.question} className={`${this.props.titleColor}`}>
          <h5>{data.question}</h5>
        </div>
        <div style={styles.answer}>
          {data.answer.map((cb) => <Checkbox label={cb} key={cb} onCheck={this.updateCheck.bind(this, cb)} />)}
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
    padding: '2em 1em'
  }
};

export default CheckboxQuestion