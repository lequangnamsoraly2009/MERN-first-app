import React from "react";
import { Row, Col, Card,Alert } from "react-bootstrap";
import ActionButtons from "../ActionButtons";

function SinglePost({ post }) {
  const { _id, status, title, description, url } = post;
  return (
    <Card
      className="shadow"
      border={
        status === "LEARNED"
          ? "success"
          : status === "LEARNING"
          ? "warning"
          : "danger"
      }
    >
      <Card.Body>
        <Card.Title>
          <Row>
            <Col>
              <p className="post-title">{title}</p>
              <Alert
                // pill
                className="p-0 m-0 w-50"
                variant={
                  status === "LEARNED"
                    ? "success"
                    : status === "LEARNING"
                    ? "warning"
                    : "danger"
                }
                
              >{status}</Alert>
              {/* <span className="badge alert-warning" >{status}</span> */}
            </Col>
            <Col className="text-right">
                <ActionButtons url={url} _id={_id}/>
            </Col>
          </Row>
        </Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SinglePost;
