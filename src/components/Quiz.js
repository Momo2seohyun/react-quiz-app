import React, { Component } from "react";
import { Step, Stepper, StepButton, StepLabel } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';

import LessonOne from './LessonOne'
import LessonTwo from './LessonTwo'
import LessonThree from './LessonThree'
import LessonFour from './LessonFour'

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stepIndex: 0,
      finished: false,
      loading: false,
      disabledBtn: true,
      open: false,
      lessonOne: {
        point: null
      },
      lessonTwo: {
        point: null
      },
      lessonThree: {
        point: null
      },
      lessonFour: {
        point: null
      },
      massage: ""
    }
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }
  ;

  dummyAsync(cb) {
    this.setState({
      loading: true
    }, () => {
      this.asyncTimer = setTimeout(cb, 500);
    });
  }
  ;

  handleNext() {
    const {stepIndex, lessonOne, lessonTwo, lessonThree, lessonFour} = this.state;
    if (stepIndex === 0) {
      if (lessonOne.color === "green") {
        this.setState({
          lessonOne: {
            point: 1
          },
          open: true,
          disabledBtn: true,
          massage: "You got 1 point"
        })
      } else {
        this.setState({
          lessonOne: {
            point: 0
          },
          open: true,
          disabledBtn: true,
          massage: "You got 0 point"
        })
      }
    } else if (stepIndex === 1) {
      if (lessonTwo.num === 2) {
        this.setState({
          lessonTwo: {
            point: 1
          },
          open: true,
          disabledBtn: true,
          massage: "You got 1 point"
        })
      } else {
        this.setState({
          lessonTwo: {
            point: 0
          },
          open: true,
          disabledBtn: true,
          massage: "You got 0 point"
        })
      }
    } else if (stepIndex === 2) {
      if (lessonThree.answer === "elephant") {
        this.setState({
          lessonThree: {
            point: 1
          },
          open: true,
          disabledBtn: true,
          massage: "You got 1 point"
        })
      } else {
        this.setState({
          lessonThree: {
            point: 0
          },
          open: true,
          disabledBtn: true,
          massage: "You got 0 point"
        })
      }
    } else if (stepIndex === 3) {
      if (lessonFour.answer === true) {
        this.setState({
          lessonFour: {
            point: 1
          },
          open: true,
          disabledBtn: true,
          massage: "You got 1 point"
        })
      } else {
        this.setState({
          lessonFour: {
            point: 0
          },
          open: true,
          disabledBtn: true,
          massage: "You got 0 point"
        })
      }
    }
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 3,
      }));
    }
  }

  handlePrev() {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex - 1,
      }));
    }
  }
  ;

  answerOne(value) {
    this.setState({
      lessonOne: value,
      disabledBtn: false
    })
  }
  answerTwo(value) {
    this.setState({
      lessonTwo: value,
      disabledBtn: false
    })
  }
  answerThree(value) {
    this.setState({
      lessonThree: value,
      disabledBtn: false
    })
  }
  answerFour(value) {
    this.setState({
      lessonFour: value,
      disabledBtn: false
    })
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <LessonOne answerOne={this.answerOne.bind(this)} />;
      case 1:
        return <LessonTwo answerTwo={this.answerTwo.bind(this)} />;
      case 2:
        return <LessonThree answerThree={this.answerThree.bind(this)} />;
      case 3:
        return <LessonFour answerFour={this.answerFour.bind(this)} />;
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  renderContent() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {
      margin: '0 16px',
      overflow: 'hidden'
    };

    if (finished) {
      return (
        <div style={styles.contentStyle}>
          <p>
            <a
        href="#"
        onClick={(event) => {
          event.preventDefault();
          this.setState({
            stepIndex: 0,
            finished: false
          });
        }}
        >
              Click here
            </a> to reset the example.
          </p>
        </div>
        );
    }

    return (
      <div style={styles.contentStyle}>
        <div>{this.getStepContent(stepIndex)}</div>
        <div style={{
        marginTop: 24,
        marginBottom: 12
      }}>
          <FlatButton
      label="Back"
      disabled={stepIndex === 0}
      onTouchTap={this.handlePrev.bind(this)}
      style={{
        marginRight: 12
      }}
      />
          <RaisedButton
      label={stepIndex === 3 ? 'Finish' : 'Next'}
      primary={true}
      disabled={this.state.disabledBtn}
      onTouchTap={this.handleNext.bind(this)}
      />
        </div>
      </div>
      );
  }

  render() {
    let {stepIndex, loading} = this.state
    //console.log(this.state.lessonFour)
    return (
      <div style={styles.stepper}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Lesson 1</StepLabel>
          </Step>
          <Step>
            <StepLabel>Lesson 2</StepLabel>
          </Step>
          <Step>
            <StepLabel>Lesson 3</StepLabel>
          </Step>
          <Step>
            <StepLabel>Lesson 4</StepLabel>
          </Step>
        </Stepper>
        <ExpandTransition loading={loading} open={true}>
          {this.renderContent()}
        </ExpandTransition>
        <Snackbar
      open={this.state.open}
      message={this.state.massage}
      autoHideDuration={2000}
      onRequestClose={this.handleRequestClose.bind(this)}
      />
      </div>
    )
  }
}

const styles = {
  stepper: {
    width: '100%',
    margin: 'auto'
  },
  contentStyle: {
    margin: '0 16px',
    overflow: 'hidden'
  }
}

export default Quiz