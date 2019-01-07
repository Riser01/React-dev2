import React, { Component, Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import Regis from "./Reg_form";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",

    alignContent: "center",
    textAlign: "center",
    backgroundColor: "#E0E0E0"
  },
  paper: {
    padding: theme.spacing.unit * 10,
    margin: 15,
    elevation: 10
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }

  changeHandler = event => {
    this.setState({
      email: event.target.value
    });
  };
  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <Fragment>
        <Grid container className={classes.root} spacing={40} justify="center">
          <Grid item alignItems="center" alignContent="center" xs={6}>
            <Paper className={classes.paper}>
              <Regis />
            </Paper>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}
export default withStyles(styles)(login);
