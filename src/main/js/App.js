import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container } from "react-bootstrap";
import ReactDOM from "react-dom";
import BirthdayInput from "./components/BirthdayInput";
import InventionList from "./components/InventionList";
import MyNavbar from "./components/MyNavbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = { inventions: [], birthday: new Date() };
  }

  setBirthday = (date) => {
    this.setState({ birthday: date });
  };

  componentDidMount() {
    fetch("/api/inventions")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ inventions: json._embedded.inventions });
      });
  }
  render() {
    return (
      <div>
        <MyNavbar />
        <Container>
          <BirthdayInput
            setBirthday={this.setBirthday}
            birthday={this.state.birthday}
          />
          <InventionList
            inventions={this.state.inventions}
            birthday={this.state.birthday}
          />
        </Container>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
