import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FeedbackForm from "./Feedback";
import PaymentForm from "./Payment";
import SheduleForm from "./Shedule";
import ResumeForm from "./Upload-resume";
import Thankyou from "./Thankyou";

const styles = theme => ({
  root: {
    alignText: "center",
    justify: "center",
    justifyContent: "center",
    margin: 40,
    alignContent: "center"
  },
  paper: {
    textAlign: "right",
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.primary
  },
  backButton: {
    marginRight: theme.spacing.unit
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  }
});

function getSteps() {
  return ["Upload Resume", "Schedule", "Payment", "Feedback"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return "Upload Your Resume";
    case 1:
      return "Book Your Slot";
    case 2:
      return "Complete Your Payment";
    default:
      return "Give Your Feedback";
  }
}

class HorizontalLabelPositionBelowStepper extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <Grid className={classes.root}>
        <Grid
          conainer
          className={classes.root}
          xs={12}
          style={{ alignContent: "center" }}
        >
          <Paper className={classes.paper}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map(label => {
                return (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <div>
              {this.state.activeStep === steps.length ? (
                <div>
                  <div>
                    <Thankyou />
                  </div>
                  <div>
                    <Typography className={classes.instructions}>
                      All steps completed
                    </Typography>
                    <Button variant="outlined" onClick={this.handleReset}>
                      Book Again
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <div>
                    {activeStep === 0 ? (
                      <ResumeForm />
                    ) : activeStep === 1 ? (
                      <SheduleForm />
                    ) : activeStep === 2 ? (
                      <PaymentForm />
                    ) : activeStep === 3 ? (
                      <FeedbackForm />
                    ) : null}
                  </div>
                  <div>
                    <Typography className={classes.instructions}>
                      {getStepContent(activeStep)}
                    </Typography>
                    <Button
                      variant="outlined"
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      className={classes.backButton}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                    >
                      {activeStep === steps.length - 1
                        ? "Finish"
                        : activeStep === 0
                        ? "Submit"
                        : "Next"}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

HorizontalLabelPositionBelowStepper.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(HorizontalLabelPositionBelowStepper);
