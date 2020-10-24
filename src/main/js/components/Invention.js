import React from "react";

class Invention extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.invention.name}</td>
        <td>{this.props.invention.created}</td>
        <td>
          <a target="_blank" href={this.props.invention.src}>
            {this.props.invention.src}
          </a>
        </td>
      </tr>
    );
  }
}

export default Invention;
