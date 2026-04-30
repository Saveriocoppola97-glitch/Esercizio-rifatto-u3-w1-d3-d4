import { Component } from "react";
import { Card, Button } from "react-bootstrap";
import RewiewBook from "./RewiewBook";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Card
        style={{
          border: this.state.selected ? "4px solid red" : "1px solid gray",
        }}
      >
        <Card.Img
          src={this.props.img}
          onClick={() =>
            this.setState((prev) => ({
              selected: !prev.selected,
            }))
          }
        />

        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>-${this.props.price}</Card.Text>
          <Button variant="warning">Comprami</Button>
          {this.state.selected && <RewiewBook asin={this.props.asin} />}
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
