import React, { Component } from "react";
import { Step, Stepper, StepButton, StepLabel } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Done from 'material-ui/svg-icons/action/done';

import LessonOne from './LessonOne'
import LessonTwo from './LessonTwo'
import LessonThree from './LessonThree'
import LessonFour from './LessonFour'
import LessonFive from './LessonFive'

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
      lessonFive: {
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
    const {stepIndex, lessonOne, lessonTwo, lessonThree, lessonFour, lessonFive} = this.state;
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
    } else if (stepIndex === 4) {
      if (lessonFive.groupO === true && lessonFive.groupA === true && lessonFive.groupB === true) {
        this.setState({
          lessonFive: {
            point: 1
          },
          open: true,
          disabledBtn: true,
          massage: "You got 1 point"
        })
      } else {
        this.setState({
          lessonFive: {
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
        finished: stepIndex >= 4,
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
  answerFive(value) {
    this.setState({
      lessonFive: value,
      disabledBtn: false
    })
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <LessonOne answerOne={this.answerOne.bind(this)} titleColor={this.props.titleColor} />;
      case 1:
        return <LessonTwo answerTwo={this.answerTwo.bind(this)} titleColor={this.props.titleColor} />;
      case 2:
        return <LessonThree answerThree={this.answerThree.bind(this)} titleColor={this.props.titleColor} />;
      case 3:
        return <LessonFour answerFour={this.answerFour.bind(this)} titleColor={this.props.titleColor} />;
      case 4:
        return <LessonFive answerFive={this.answerFive.bind(this)} titleColor={this.props.titleColor} />;
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  renderContent() {
    const {finished, stepIndex, lessonOne, lessonTwo, lessonThree, lessonFour, lessonFive} = this.state;
    const contentStyle = {
      margin: '0 16px',
      overflow: 'hidden'
    };

    if (finished) {
      return (
        <div style={styles.contentStyle}>
          <div style={styles.summary} className={`${this.props.titleColor}`}>
            <h5>You got {lessonOne.point + lessonTwo.point + lessonThree.point + lessonFour.point + lessonFive.point} point!!</h5>
          </div>
          <div style={styles.reset}>
            <RaisedButton 
              label="Reset Quiz" 
              primary={true} 
              onTouchTap={(event) => {
                event.preventDefault()
                this.setState({
                  stepIndex: 0,
                  finished: false
                })
              }}
            />
          </div>
        </div>
      );
    }

    return (
      <div style={styles.contentStyle}>
        <div>{this.getStepContent(stepIndex)}</div>
        <div style={styles.btn}>
          <FloatingActionButton disabled={this.state.disabledBtn} onClick={this.handleNext.bind(this)}>
            <Done />
          </FloatingActionButton>
        </div>
      </div>
      );
  }

  render() {
    let {stepIndex, loading} = this.state
    return (
      <div style={styles.stepper}>
        <Stepper activeStep={stepIndex} />
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
  },
  container: {
    width: '50%'
  },
  contentStyle: {
    margin: '0 1em'
  },
  btn: {
    marginTop: 24,
    marginBottom: 12,
    marginRight: '1em',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  summary: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '2em 1em'
  },
  reset: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '2em 1em'
  }
}

export default Quiz