import React from "react";
import { Button, Form, Nav, Navbar } from "react-bootstrap";
import Cookies from "jscookie";
import CreateDialog from "./crud/CreateDialog";

class MyNavbar extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      modalShow: false,
    };
  }
  getUsername = () => {
    return fetch("/auth/user")
      .then((response) => response.json())
      .then((json) => {
        if (json.name) this.setState({ username: json.name });
      });
  };

  logout = () => {
    fetch("/logout", {
      method: "POST",
      headers: {
        "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
      },
    }).then((response) => {
      if (response.status == 200) {
        this.setState({ username: "" });
      } else {
        alert("error");
      }
    });
  };

  onHide = () => {
    this.setState({ modalShow: false });
  };

  componentDidMount() {
    this.getUsername();
  }
  render() {
    let authButtons;
    let addInventionButton;
    if (this.state.username.length > 0) {
      authButtons = (
        <div>
          <p>Signed in as: {this.state.username}</p>
          <Button variant="outline-success" onClick={() => this.logout()}>
            Logout
          </Button>
        </div>
      );
      addInventionButton = (
        <Button
          variant="outline-success"
          onClick={() => this.setState({ modalShow: true })}
        >
          Add invention
        </Button>
      );
    } else {
      authButtons = (
        <Button variant="outline-success" href="/oauth2/authorization/github">
          Login
        </Button>
      );
    }

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Older Than</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">{addInventionButton}</Nav>
          <Form inline>{authButtons}</Form>
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
