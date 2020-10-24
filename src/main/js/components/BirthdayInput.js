import React from "react";
import DatePicker from "react-date-picker";

class BirthdayInput extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <p>
          Enter your birthday and see which famous inventions you are older
          than!
        </p>
        <DatePicker
          value={this.props.birthday}
          onChange={(date) => this.props.setBirthday(date)}
        />
      </div>
    );
  }
}

export default BirthdayInput;
