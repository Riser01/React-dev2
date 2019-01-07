import React, { Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    flexGrow: 1,

    padding: theme.spacing.unit * 2,
    backgroundColor: "#3f51b5"
  },

  typography: {
    color: "white"
  },

  grid: {}
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <Fragment>
      <div className={classes.root}>
        <Grid container spacing={24} justify="center">
          <Grid item xs={12}>
            <Typography
              align="center"
              variant="h5"
              color="inherit"
              className={classes.Typography}>
              Footer
            </Typography>

            <Typography
              variant="body1"
              align="center"
              color="inherit"
              className={classes.Typography}>
              Place holder for footer
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);
