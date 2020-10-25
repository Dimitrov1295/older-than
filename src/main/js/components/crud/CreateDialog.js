import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import DatePicker from "react-date-picker";

class CreateDialog extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Invention name",
      created: new Date(),
      src: "Source of information",
    };
  }
  updateName = (e) => {
    this.setState({ name: e.target.value });
  };
  updateCreated = (date) => {
    this.setState({ created: date });
  };
  updateSrc = (e) => {
    this.setState({ src: e.target.value });
  };
  render() {
    let inputStyle = {
      marginTop: "3vh",
      marginBottom: "3vh",
    };
    return (
      <Modal
        show={this.props.modalShow}
        onHide={this.props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add an invention
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: "center" }}>
          <Form.Control
            style={inputStyle}
            onChange={(e) => this.updateName(e)}
            type="text"
            placeholder="Invention name"
          />
          <DatePicker
            style={inputStyle}
            value={this.state.created}
            onChange={(date) => this.updateCreated(date)}
          />
          <Form.Control
            style={inputStyle}
            onChange={(e) => this.updateSrc(e)}
            type="text"
            placeholder="Source of information must be a valid URL"
          />
          <Button
            variant="outline-success"
            onClick={() => {
              this.props.onCreate(this.state);
              this.props.onHide();
            }}
          >
            Add invention
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CreateDialog;
