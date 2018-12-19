import React, { Component } from "react";
import { Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
export default class FormContacto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      comment: "",
      esEmpresa: props.esEmpresa,
      msgSent: false
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    // todo..
    // axios({
    //     method: 'post',
    //     url: `${API_PATH}`,
    //     headers: { 'content-type': 'application/json' },
    //     data: this.state
    //   })
    //     .then(result => {
    //       this.setState({
    //         msgSent: result.data.sent
    //       })
    //     })
    //     .catch(error => this.setState({ error: error.message }));
  }

  render() {
    return (
      <Form className={this.props.class}>
        <FormGroup>
          <Label>
            {this.props.esEmpresa ? "Empresa" : "Nombre y apellido"}
          </Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder={
              this.props.esEmpresa ? "Empresa.." : "Nombre y apellido"
            }
            type="text"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Email.."
            type="email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label>Comentario</Label>
          <Input
            id="comment"
            name="comment"
            placeholder="Comentario.."
            type="textarea"
            value={this.state.comment}
            onChange={e => this.setState({ comment: e.target.value })}
          />
        </FormGroup>
        <Button
          onClick={this.handleFormSubmit}
          style={{
            backgroundColor: "#262626",
            color: "#fff",
            borderColor: "#262626"
          }}
          className="w-100"
        >
          {this.props.esEmpresa ? "Certifique su empresa" : "Enviar"}
        </Button>
      </Form>
    );
  }
}
