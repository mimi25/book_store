import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchBooks } from "../actions/booksActions";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class FetchBooks extends Component {
    componentWillMount(){
        this.props.fetchBooks()
    }
  render() {
    const bookItem = this.props.books.map(book => (
      <Card>
        <CardImg src={book.image} />
        <CardBody>
          <CardTitle>{book.title}</CardTitle>
          <CardSubtitle>{book.subtitle}</CardSubtitle>
          <CardText>{book.price}</CardText>
          <Button>more details</Button>
        </CardBody>
      </Card>
    ));
    return <div>{bookItem}</div>;
  }
}

export default connect(null, {fetchBooks})(FetchBooks);
