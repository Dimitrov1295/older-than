import React from "react";

class Invention extends React.Component {
  constructor() {
    super();
  }
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
        <td>
          <img
            onClick={() => this.props.onDelete(this.props.invention)}
            style={{ maxWidth: "5vw", maxHeight: "5vh" }}
            src="/delete.png"
            alt="Edit"
          />
        </td>
      </tr>
    );
  }
}

export default Invention;
