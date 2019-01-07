import React, { Component, Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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

class Price extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Grid item justify="center" style={{ padding: 20 }}>
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
                label="Email"
                type="email"
                className={classes.textField}
                margin="normal"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid />

            <Grid>
              <TextField
                id="outlined-search"
                className={classes.textField}
                margin="normal"
                fullWidth
                id="raised-button-file"
                variant="outlined"
                type="file"
                style={{ display: "none" }}
              />
              <label htmlFor="raised-button-file">
                <Button
                  accept="application/msword,  application/pdf"
                  variant="raised"
                  component="span"
                  className={classes.button}
                  color="secondary"
                  style={{ marginTop: 10 }}>
                  Upload Resume
                </Button>
              </label>
            </Grid>
          </form>
        </Grid>
      </Fragment>
    );
  }
}
export default withStyles(styles)(Price);
