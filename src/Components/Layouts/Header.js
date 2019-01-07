import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 0,
    marginRight: 0,
    paddingBottom: 20
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -0,
    marginRight: 0
  },
  toolbar: {
    paddingTop: 5
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  console.log(props);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            EasyInterview
          </Typography>

          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button component={Link} to="pricing" color="inherit">
            Pricing
          </Button>
          <Button component={Link} to="booknow" color="inherit">
            Book Now
          </Button>
          <Button component={Link} to="login" color="inherit">
            Login
          </Button>

          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
