import SingleBook from "./SingleBook";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Component } from "react";

class BookList extends Component {
  state = {
    search: "",
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-center my-5">
          <Col xs={12} md={6}>
            <Form.Control
              type="text"
              placeholder="Cerca un libro"
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
            />
          </Col>
        </Row>

        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4">
          {this.props.libri
            .filter((Sbook) =>
              Sbook.title
                .toLowerCase()
                .includes(this.state.search.toLowerCase()),
            )
            .map((Sbook) => (
              <Col key={Sbook.asin}>
                <SingleBook
                  img={Sbook.img}
                  title={Sbook.title}
                  price={Sbook.price}
                  asin={Sbook.asin}
                />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
