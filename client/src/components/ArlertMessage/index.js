import React from "react";
import { Alert } from "react-bootstrap";

function ArlertMessage({ info }) {
  return info === null ? null : (
    <Alert variant={info.type}>{info.message}</Alert>
  );
}

export default ArlertMessage;
