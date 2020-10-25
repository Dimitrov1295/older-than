import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container } from "react-bootstrap";
import ReactDOM from "react-dom";
import BirthdayInput from "./components/BirthdayInput";
import InventionList from "./components/InventionList";
import MyNavbar from "./components/MyNavbar";
import Cookies from "jscookie";

class App extends React.Component {
  constructor() {
    super();
    this.state = { inventions: [], birthday: new Date() };
  }

  setBirthday = (date) => {
    this.setState({ birthday: date });
  };

  componentDidMount() {
    this.loadFromServer();
  }

  loadFromServer = () => {
    fetch("/api/inventions")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ inventions: json._embedded.inventions });
      });
  };

  onCreate = (newInvention) => {
    fetch("/api/inventions", {
      method: "POST",
      body: JSON.stringify(newInvention),
      headers: {
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
      },
    }).then((response) => {
      if (response.status == 201) {
        this.loadFromServer();
      }
    });
  };

  onDelete = (invention) => {
    fetch(invention._links.self.href, {
      method: "DELETE",
      headers: {
        "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
      },
    }).then((response) => {
      if (response.status == 204) {
        this.loadFromServer();
      } else {
        alert(response);
      }
    });
  };

  render() {
    return (
      <div>
        <MyNavbar onCreate={this.onCreate} />
        <Container>
          <BirthdayInput
            setBirthday={this.setBirthday}
            birthday={this.state.birthday}
          />
          <InventionList
            onDelete={this.onDelete}
            inventions={this.state.inventions}
            birthday={this.state.birthday}
          />
        </Container>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
