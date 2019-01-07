import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Feedback from "@material-ui/icons/Feedback";
import Payment from "@material-ui/icons/Payment";
import Event from "@material-ui/icons/Event";
import PermIdentity from "@material-ui/icons/PermIdentity";

const styles = {
  card: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  },
  icon: {
    margin: 5,
    fontSize: 120
  },
  image: {
    position: "relative",
    height: 205,
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15
      },
      "& $imageMarked": {
        opacity: 0
      },
      "& $imageTitle": {
        border: "4px solid currentColor"
      }
    }
  }
};

function SimpleCard(props) {
  const { classes } = props;
  console.log(props.num);

  return (
    <ButtonBase
      component={Link}
      to="booknow"
      focusRipple
      className={classes.image}
      focusVisibleClassName={classes.focusVisible}>
      <Card className={classes.card}>
        <CardContent>
          {props.num === "1" ? (
            <PermIdentity className={classes.icon} />
          ) : props.num === "2" ? (
            <Event className={classes.icon} />
          ) : props.num === "3" ? (
            <Payment className={classes.icon} />
          ) : props.num === "4" ? (
            <Feedback className={classes.icon} />
          ) : null}
          <Typography variant="body2" component="h2">
            {props.num === "1"
              ? "1) UpLoad Your Resume".toUpperCase()
              : props.num === "2"
              ? "2) Schedule".toUpperCase()
              : props.num === "3"
              ? "3) Payment".toUpperCase()
              : props.num === "4"
              ? "4) Feedback".toUpperCase()
              : null}
          </Typography>
        </CardContent>
      </Card>
    </ButtonBase>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
