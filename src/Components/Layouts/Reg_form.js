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
          <Grid>
            <Typography
              align="center"
              variant="h5"
              gutterBottom
              fullWidth
              className={classes.Typography}>
              Welcome
            </Typography>
          </Grid>
          <Grid>
            <TextField
              id="outlined-search"
              label="Full Name"
              className={classes.textField}
              margin="normal"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid>
            <TextField
              id="outlined-search"
              label="Email"
              type="email"
              className={classes.textField}
              margin="normal"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid>
            <TextField
              id="outlined-search"
              label="Phone Number"
              type="number"
              className={classes.textField}
              margin="normal"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid>
            <TextField
              id="outlined-search"
              label="Username"
              className={classes.textField}
              margin="normal"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid>
            <TextField
              id="outlined-search"
              type="password"
              label="Password"
              className={classes.textField}
              margin="normal"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid>
            <TextField
              id="outlined-search"
              type="password"
              label="Retype Password"
              className={classes.textField}
              margin="normal"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <div className={classes.root} style={{ justifyContent: "center" }}>
            <Fab variant="extended" color="primary" aria-label="Add">
              Sign Up
            </Fab>
          </div>
          <Grid>
            <Typography variant="caption" gutterBottom>
              Already have a account?<Link to="/login">Login in</Link>
            </Typography>
          </Grid>
        </form>
      </Fragment>
    );
  }
}
export default withStyles(styles)(login);
