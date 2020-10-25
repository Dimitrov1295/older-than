import React from "react";
import { Button, Form, Nav, Navbar } from "react-bootstrap";
import Cookies from "jscookie";
import CreateDialog from "./crud/CreateDialog";

class MyNavbar extends React.Component {
  constructor() {
    super();
    this.state = {
      modalShow: false,
    };
  }

  onHide = () => {
    this.setState({ modalShow: false });
  };

  render() {
    let addInventionButton = (
      <Button
        variant="outline-success"
        onClick={() => this.setState({ modalShow: true })}
      >
        Add invention
      </Button>
    );

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Older Than</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">{addInventionButton}</Nav>
        </Navbar.Collapse>
        <CreateDialog
          modalShow={this.state.modalShow}
          onHide={this.onHide}
          onCreate={this.props.onCreate}
        />
      </Navbar>
    );
  }
}

export default MyNavbar;
