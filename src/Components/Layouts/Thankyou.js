import React, { Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
    alignContent: "center",
    textAlign: "center"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },

  margin: {
    margin: theme.spacing.unit,
    justifyContent: "center",
    alignItems: "center"
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

    return (
      <Fragment>
        <form>
          <Grid style={{ padding: 20, margin: 50 }}>
            <Typography
              align="center"
              variant="h5"
              gutterBottom
              className={classes.Typography}>
              Thank You for Using our services
            </Typography>
            <Typography
              variant="body1"
              align="center"
              gutterBottom
              className={classes.Typography}>
              prepare well and go to all your intertivew 30 mins early
            </Typography>
          </Grid>
        </form>
      </Fragment>
    );
  }
}
export default withStyles(styles)(login);
