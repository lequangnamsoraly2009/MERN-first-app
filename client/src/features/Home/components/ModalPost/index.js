import axios from "axios";
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { apiUrl } from "../../../../common/apiConstant";
import { addPost } from "../../postSlice";

function ModalPost(props) {
  //Hooks
  const [newPost, setNewPost] = useState({
    title: "",
    description: "",
    url: "",
    status: "TO LEARN",
  });

  const dispatch = useDispatch();

  const { title, description, url, status } = newPost;

  const reset = () =>{
    props.setShowModal(false);
    setNewPost({ title: "", description: "", url: "", status: "TO LEARN" });
  }

  const closeModal = () => {
    reset();
  };

  const OnChangePostNewPost = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const onSubmitPost = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/post`, newPost);
      if (response.data.success) {
        dispatch(addPost(response.data.post));
        return response.data;
      }
    } catch (error) {
      // console.log(error);
      return { success: false, message: "Server crash" };
    }
    reset();
  };

  

  return (
    <Modal show={props.showModal} animation={false} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>What do you want to learn?</Modal.Title>
      </Modal.Header>
      <Form onSubmit={(e) => onSubmitPost(e)}>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Title"
              name="title"
              required
              aria-describedby="title-help"
              value={title}
              onChange={OnChangePostNewPost}
            />
            <Form.Text id="title-help" muted>
              required
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              row={3}
              placeholder="Description"
              name="description"
              value={description}
              onChange={OnChangePostNewPost}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Tutorial URL"
              name="url"
              value={url}
              onChange={OnChangePostNewPost}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            LearnIt!
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default ModalPost;
