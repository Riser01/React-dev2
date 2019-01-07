import "moment";
import { InlineDateTimePicker } from "material-ui-pickers";
import React, { Fragment, PureComponent } from "react";
import { IconButton, Icon, InputAdornment } from "@material-ui/core";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
export default class InlineDateTimePickerDemo extends PureComponent {
  state = {
    selectedDateone: "2018-01-01T00:00:00.000Z",
    selectedDatetwo: "2018-01-08T00:00:00.000Z",
    selectedDatethr: "2018-01-15T00:00:00.000Z"
  };

  handleDateChangeone = date => {
    console.log(date);
    if (
      this.state.selectedDatetwo !== "" &&
      this.state.selectedDatetwo !== "2018-01-08T00:00:00.000Z" &&
      this.state.selectedDatethr !== "" &&
      this.state.selectedDatethr !== "2018-01-08T00:00:00.000Z"
    ) {
      this.setState({ selectedDateone: date });
    } else {
      this.setState({
        selectedDateone: date,
        selectedDatetwo: date.add(7, "days"),
        selectedDatethr: date.add(14, "days")
      });
    }
  };
  handleDateChangetwo = date => {
    this.setState({ selectedDatetwo: date });
  };
  handleDateChangethr = date => {
    this.setState({ selectedDatethr: date });
  };

  render() {
    const { selectedDateone, selectedDatetwo, selectedDatethr } = this.state;

    return (
      <Fragment>
        <div className="picker" style={{ textAlign: "center", margin: 30 }}>
          <InlineDateTimePicker
            label="Session one"
            value={selectedDateone}
            onChange={this.handleDateChangeone}
            leftArrowIcon={<KeyboardArrowLeft />}
            rightArrowIcon={<KeyboardArrowRight />}
          />
        </div>
        <div className="picker" style={{ textAlign: "center", margin: 30 }}>
          <InlineDateTimePicker
            label="Session two"
            value={selectedDatetwo}
            onChange={this.handleDateChangetwo}
            leftArrowIcon={<KeyboardArrowLeft />}
            rightArrowIcon={<KeyboardArrowRight />}
          />
        </div>
        <div className="picker" style={{ textAlign: "center", margin: 30 }}>
          <InlineDateTimePicker
            label="Session Three"
            value={selectedDatethr}
            onChange={this.handleDateChangethr}
            leftArrowIcon={<KeyboardArrowLeft />}
            rightArrowIcon={<KeyboardArrowRight />}
          />
        </div>
      </Fragment>
    );
  }
}
