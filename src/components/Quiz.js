import React, { Component } from "react";
import { Step, Stepper, StepButton, StepLabel } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';

import LessonOne from './LessonOne'
import LessonTwo from './LessonTwo'

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
        point: 0
      },
      lessonTwo: {
        point: 0
      },
      massage: ""
    }
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  };

  dummyAsync(cb){
    this.setState({loading: true}, () => {
      this.asyncTimer = setTimeout(cb, 500);
    });
  };

  handleNext() {
    const {stepIndex, lessonOne, lessonTwo} = this.state;
    if(stepIndex === 0) {
      if(lessonOne.color === "green") {
        this.setState({
          lessonOne: {
            point: 1
          },
          open: true,
          massage: "You got 1 point"
        })
      } else {
        this.setState({
           lessonOne: {
            point: 0
          },
          open: true,
          massage: "You got 0 point"
        })
      }
    } else if(stepIndex === 1) {
      if(lessonTwo.num === 2) {
        this.setState({
          lessonTwo: {
            point: 1
          },
          open: true,
          massage: "You got 1 point"
        })
      } else {
        this.setState({
           lessonTwo: {
            point: 0
          },
          open: true,
          massage: "You got 0 point"
        })
      }
    }
    if (!this.state.loading) {
        this.dummyAsync(() => this.setState({
          loading: false,
          stepIndex: stepIndex + 1,
          finished: stepIndex >= 2,
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
  };

  anwswerOne(value) {
    this.setState({lessonOne: value, disabledBtn: false})
  }
  anwswerTwo(value) {
    this.setState({lessonTwo: value, disabledBtn: false})
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <LessonOne anwswerOne={this.anwswerOne.bind(this)} />;
      case 1:
        return <LessonTwo anwswerTwo={this.anwswerTwo.bind(this)} />;
      case 2:
        return 'This is the bit I really care about!';
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
      label={stepIndex === 2 ? 'Finish' : 'Next'}
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
    console.log(this.state.lessonTwo)
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
    maxWidth: 700,
    margin: 'auto'
  },
  contentStyle: {
    margin: '0 16px',
    overflow: 'hidden'
  }
}

export default Quiz