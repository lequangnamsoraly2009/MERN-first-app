import React from "react";
import { Button } from "react-bootstrap";
function ActionButtons({ url, _id }) {
  return (
    <>
      <Button className="post-button" href={url} target="_blank">
        Watch It
      </Button>
      <Button className="post-button">Delete</Button>
      <Button className="post-button">Edit</Button>
    </>
  );
}

export default ActionButtons;
