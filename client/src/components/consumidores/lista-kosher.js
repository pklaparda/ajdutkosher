import React from "react";
import {
  Row,
  Col,
  Container,
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import * as FontAwesome from "react-icons/fa";

const pStyle = { fontSize: "1rem", color: "#262626" };

export default class ListaKosher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [],
      productosFiltrados: [],
      textoDeBusqueda: "",
      modalOpen: false,
      modalCat: null
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.timeOut = null;
  }

  toggle = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  };

  mostrarModalCategoria = idCat => {
    // fetch(`/api/categoria/get_id.php?id=${idCat}`)
    //   .then(data => data.json())
    //   .then(res => {
    //     this.setState({
    //       modalCat: { ...res }
    //     });
    //   });
    this.setState(
      {
        modalCat: {
          nombre: "categooo",
          descripcion: "kosher, kosher.. y mas kosher"
        }
      },
      () => this.toggle()
    );
  };

  onSearchChange = val => {
    console.log(val);
    if (val && val.trim() != "" && val.length > 2) {
      clearTimeout(this.timeOut);
      this.timeOut = setTimeout(
        function() {
          this.filtrarProductos(val);
          clearTimeout(this.timeOut);
        }.bind(this),
        500
      );
    } else {
      this.setState({ productosFiltrados: [], textoDeBusqueda: val });
    }
  };

  filtrarProductos = val => {
    val = this.takeOutAccent(val).toLowerCase();
    this.setState(state => ({
      productosFiltrados: state.productos.filter(prod => {
        let contieneTodasLasPalabras = true;
        val.split(" ").forEach(palabra => {
          contieneTodasLasPalabras =
            contieneTodasLasPalabras &&
            this.takeOutAccent(
              prod.brand.toLowerCase() +
                " " +
                prod.name.toLowerCase() +
                " " +
                prod.Cat.toLowerCase()
            ).includes(palabra);
        });
        return contieneTodasLasPalabras;
      }),
      textoDeBusqueda: val
    }));
  };

  takeOutAccent = val => {
    val = val.replace("á", "a");
    val = val.replace("é", "e");
    val = val.replace("í", "i");
    val = val.replace("ó", "o");
    val = val.replace("ú", "u");
    val = val.replace("Á", "A");
    val = val.replace("É", "E");
    val = val.replace("Í", "I");
    val = val.replace("Ó", "O");
    val = val.replace("Ú", "U");
    return val;
  };

  componentWillMount = () => {
    fetch(
      "http://kosher.org.ar/j_15/web_services/servidor.php?function=products"
    )
      .then(data => data.json())
      .then(res => {
        this.setState({ productos: res.products });
      });
  };

  render() {
    return (
      <Container fluid={true}>
        <h2
          className="pb-2 pt-3"
          style={{ fontSize: "2rem", fontWeight: "bold", color: "#262626" }}
        >
          Lista Kosher
        </h2>
        <p className="pb-2 m-0" style={pStyle}>
          ¿Querés saber si un producto esta certificado?
        </p>

        <Row>
          <Col md={{ size: 10, offset: 1 }}>
            <InputGroup className="py-4">
              <Input
                placeholder="buscar.."
                onKeyUp={e => this.onSearchChange(e.target.value)}
                className="py-4"
              />
              <InputGroupAddon addonType="append">
                <Button color="secondary">
                  <FontAwesome.FaSearch />
                </Button>
              </InputGroupAddon>
            </InputGroup>
            <ListadoProductos
              productos={this.state.productosFiltrados}
              textoDeBusqueda={this.state.textoDeBusqueda}
              onCatClick={this.mostrarModalCategoria}
            />
          </Col>
        </Row>
        <Modal
          isOpen={this.state.modalOpen}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            {this.state.modalCat != null
              ? this.state.modalCat.nombre
              : "No name"}
          </ModalHeader>
          <ModalBody>
            {this.state.modalCat != null
              ? this.state.modalCat.descripcion
              : "Sin descripción"}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

const ListadoProductos = ({ productos, textoDeBusqueda, onCatClick }) => {
  if (productos.length) {
    let Lis = productos.map(p => (
      <ListGroupItem key={p.id} className="px-0">
        <Container>
          <Row>
            <Col
              md="2"
              xs="12"
              sm="12"
              style={{ fontWeight: "Bold" }}
              onClick={e => onCatClick(p.idCat)}
            >
              {p.Cat}
            </Col>
            <Col md="2" xs="12" sm="12" style={{ fontWeight: "Bold" }}>
              {p.brand}
            </Col>
            <Col md="6" xs="12" sm="12">
              {p.name}
            </Col>
            <Col md="2" xs="12" sm="12" style={{ fontWeight: "Bold" }}>
              {p.cod}
            </Col>
          </Row>
        </Container>
      </ListGroupItem>
    ));
    return (
      <ListGroup flush className="pt-3 pb-5">
        {Lis}
      </ListGroup>
    );
  } else {
    let niBusco = textoDeBusqueda == "";
    let title = niBusco
      ? "Encuentre facilmente lo que está buscando"
      : "No se han encontrado resultados";
    let body =
      "No se complique, busque cuaquier palabra que pueda estar asociada al producto, sea su nombre, marca o categoría y si cuenta con nuestra certificación podrá verlo en los resultados";
    return (
      <ListGroup flush className="pt-3 pb-5">
        <ListGroupItem>
          <ListGroupItemHeading>{title}</ListGroupItemHeading>
          <ListGroupItemText>{body}</ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
    );
  }
};
