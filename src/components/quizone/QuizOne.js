import React, { Component } from "react";
import { Step, Stepper, StepButton, StepLabel } from 'material-ui/Stepper';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Done from 'material-ui/svg-icons/action/done';
import Clear from 'material-ui/svg-icons/content/clear';
import {greenA700, pinkA400} from 'material-ui/styles/colors';

import RadioBtn from './RadioBtn'
import SliderQuestion from './SliderQuestion'
import FieldQuestion from './FieldQuestion'
import BoolQuestion from './BoolQuestion'
import CheckboxQuestion from './CheckboxQuestion'

class QuizOne extends Component {
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
    let { user } = this.props
    if (stepIndex === 0) {
      if (lessonOne.answer === "green") {
        // firebase.database().ref('/users/' + user.userId + '/quizOne' + '/lessonOne').set({
        //     point: 1
        // });
        this.setState({
          lessonOne: {
            point: 1
          },
          open: true,
          disabledBtn: true,
          massage: "You got 1 point"
        })
      } else {
        // firebase.database().ref('/users/' + user.userId + '/quizOne' + '/lessonOne').set({
        //     point: 0
        // });
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
      if (lessonTwo.answer === 2) {
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

  answerRadioBtn(value) {
    this.setState({
      lessonOne: value,
      disabledBtn: false
    })
  }
  answerSlider(value) {
    this.setState({
      lessonTwo: value,
      disabledBtn: false
    })
  }
  answerField(value) {
    this.setState({
      lessonThree: value,
      disabledBtn: false
    })
  }
  answerBoolean(value) {
    this.setState({
      lessonFour: value,
      disabledBtn: false
    })
  }
  answerCheckbox(value) {
    this.setState({
      lessonFive: value,
      disabledBtn: false
    })
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <RadioBtn answerRadioBtn={this.answerRadioBtn.bind(this)} titleColor={this.props.titleColor} data={this.props.data.lesson[stepIndex]} />;
      case 1:
        return <SliderQuestion answerSlider={this.answerSlider.bind(this)} titleColor={this.props.titleColor} data={this.props.data.lesson[stepIndex]} />;
      case 2:
        return <FieldQuestion answerField={this.answerField.bind(this)} titleColor={this.props.titleColor} data={this.props.data.lesson[stepIndex]} />;
      case 3:
        return <BoolQuestion answerBoolean={this.answerBoolean.bind(this)} titleColor={this.props.titleColor} data={this.props.data.lesson[stepIndex]} />;
      case 4:
        return <CheckboxQuestion answerCheckbox={this.answerCheckbox.bind(this)} titleColor={this.props.titleColor} data={this.props.data.lesson[stepIndex]} />;
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
            {this.props.data.lesson.map((lesson) => {
              if(lesson.lesson === 1) {
                return (
                  <div key={lesson.question} style={styles.answerList}>
                    <div style={styles.icon}>
                      {lessonOne.point === 1 ? <Done color={greenA700} /> : <Clear color={pinkA400} />}
                    </div>
                    <div>
                      <p>{lesson.question}</p>
                      <p style={styles.answer}>{lesson.trueAnswer}</p>
                    </div>
                  </div>
                )
              } else if(lesson.lesson === 2) {
                return (
                  <div key={lesson.question} style={styles.answerList}>
                  <div style={styles.icon}>
                    {lessonTwo.point === 1 ? <Done color={greenA700} /> : <Clear color={pinkA400} />}
                  </div>
                  <div>
                    <p>{lesson.question}</p>
                    <p style={styles.answer}>{lesson.trueAnswer}</p>
                  </div>
                </div>
                )
              } else if(lesson.lesson === 3) {
                return (
                  <div key={lesson.question} style={styles.answerList}>
                    <div style={styles.icon}>
                      {lessonThree.point === 1 ? <Done color={greenA700} /> : <Clear color={pinkA400} />}
                    </div>
                    <div>
                      <p>{lesson.question}</p>
                      <p style={styles.answer}>{lesson.trueAnswer}</p>
                    </div>
                  </div>
                )
              } else if(lesson.lesson === 4) {
                return (
                  <div key={lesson.question} style={styles.answerList}>
                    <div style={styles.icon}>
                      {lessonFour.point === 1 ? <Done color={greenA700} /> : <Clear color={pinkA400} />}
                    </div>
                    <div>
                      <p>{lesson.question}</p>
                      <p style={styles.answer}>{lesson.trueAnswer}</p>
                    </div>
                  </div>
                )
              } else if(lesson.lesson === 5) {
                return (
                  <div key={lesson.question} style={styles.answerList}>
                    <div style={styles.icon}>
                      {lessonFive.point === 1 ? <Done color={greenA700} /> : <Clear color={pinkA400} />}
                    </div>
                    <div>
                      <p>{lesson.question}</p>
                      <p style={styles.answer}>{lesson.trueAnswer}</p>
                    </div>
                  </div>
                )
              }
            })}
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
    padding: '2em 1em',
  },
  reset: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '2em 1em',
    marginBottom: '1em',
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)",
  },
  answerList: {
    display: 'flex',
    flexDirection: 'row',
    padding: '2em',
    borderBottom: '1px solid rgb(221, 221, 221)'
  },
  icon: {
    padding: '14px'
  },
  answer: {
    fontWeight: 'bold'
  }
}

export const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(QuizOne)