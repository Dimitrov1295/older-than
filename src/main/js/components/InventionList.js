import React from "react";
import { Table } from "react-bootstrap";
import Invention from "./Invention";

class InventionList extends React.Component {
  constructor() {
    super();
  }

  isBeforeDate = (date) => {
    return Date.parse(date) > this.props.birthday;
  };

  render() {
    let inventions = this.props.inventions
      .filter((invention) => this.isBeforeDate(invention.created))
      .map((invention) => {
        return <Invention key={invention.name} invention={invention} />;
      });
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Invention</th>
            <th>Created</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>{inventions}</tbody>
      </Table>
    );
  }
}

export default InventionList;
