import React from "react";
import { Col, Card, Badge } from "react-bootstrap";

const SingleBook = ({ book, mySelectedBook }) => {
  const { asin, img, title, category, price } = book;

  const handleClick = () => {
    mySelectedBook(asin);
  };

  return (
    // <div className="single-book">
    <Col xs={6} sm={4} md={3} onClick={handleClick}>
      <Card key={asin} className="b-0">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="mb-2">{title}</Card.Title>
          <div className="d-flex justify-content-between">
            <Card.Text className="m-0">{category}</Card.Text>
            <Badge bg="dark" pill>
              {price} $
            </Badge>
          </div>
        </Card.Body>
      </Card>
    </Col>
    // </div>
  );
};

export default SingleBook;
