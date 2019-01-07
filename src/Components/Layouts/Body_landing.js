import React, { Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import ProcessCard from "./Process_flow_cards";
import Fab from "@material-ui/core/Fab";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 20,
    padding: theme.spacing.unit * 2,
    justifyContent: "center",
    textAlign: "center"
  },
  paper: {
    padding: theme.spacing.unit * 2,

    textAlign: "center",
    color: theme.palette.text.primary
  },
  paper1: {
    padding: theme.spacing.unit * 2,
    margin: 15,
    height: 140,
    width: 100,

    textAlign: "center",
    color: theme.palette.text.primary
  },
  typography: {
    color: "white"
  },
  typography1: {
    color: "white",
    padding: 5
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 32
  },
  grid: {},
  margin: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <Fragment>
      <div className={classes.root}>
        <Grid container spacing={24} justify="center">
          <Grid item xs={12} style={{ justifyContent: "center" }}>
            <Typography
              align="center"
              variant="h3"
              gutterBottom
              className={classes.Typography}
            >
              EasyInterview
            </Typography>

            <Typography
              variant="body1"
              align="center"
              gutterBottom
              className={classes.Typography}
            >
              A launch pad for Your Career
            </Typography>
            <div style={{ justifyContent: "center" }}>
              <Fab
                variant="extended"
                color="primary"
                aria-label="Add"
                className={classes.margin}
                style={{ justifyContent: "center" }}
                component={Link}
                to="booknow"
              >
                Book Now
              </Fab>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={classes.root}>
        <Typography
          align="center"
          variant="h5"
          gutterBottom
          className={classes.Typography}
        >
          Our Approch
        </Typography>
        <Grid container spacing={8} justify="center" style={{ paddingTop: 50 }}>
          <Grid item md={3}>
            <ProcessCard num="1" />
          </Grid>
          <Grid item md={3}>
            <ProcessCard num="2" />
          </Grid>
          <Grid item md={3}>
            <ProcessCard num="3" />
          </Grid>
          <Grid item md={3}>
            <ProcessCard num="4" />
          </Grid>
        </Grid>
      </div>
      <div className={classes.root} style={{ margin: 100, marginTop: 70 }}>
        <Paper className={classes.paper}>
          <div style={{ paddingTop: 50, paddingBottom: 50 }}>
            <Typography
              align="center"
              variant="h5"
              gutterBottom
              className={classes.Typography}
            >
              Our Clients
            </Typography>
          </div>
          <img
            src="https://uploads.codesandbox.io/uploads/user/3f1de858-07c7-4f3f-97d9-0c9d01b58127/YWQq-recruiters2017.jpg"
            alt="clients"
            style={{ padding: 10, paddingBottom: 50, width: 450 }}
          />
        </Paper>
      </div>
    </Fragment>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);
