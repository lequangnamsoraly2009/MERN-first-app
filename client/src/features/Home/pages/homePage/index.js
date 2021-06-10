import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../../../../common/apiConstant";
import { useDispatch, useSelector } from "react-redux";
import { loadingPostSuccess, loadingPostFail } from "../../postSlice";
import { Card, Button, Row, Col } from "react-bootstrap";
import SinglePost from "../../components/SinglePost";
import ModalPost from "../../components/ModalPost";
import styled from "styled-components";

function HomePage() {
  // Hooks
  const { postsLoading, posts } = useSelector((state) => state.post);
  const [showModal, setShowModal] = useState(false);
  // const [showToast, setShowToast] = useState({
  //   show: false,
  //   message: "",
  //   type: null,
  // });

  // const { show, message, type } = showToast;

  const dispatch = useDispatch();

  //get All posts
  const getAllPosts = async () => {
    try {
      const response = await axios.get(`${apiUrl}/post`);
      if (response.data.success) {
        // console.log(response.data.posts);
        dispatch(loadingPostSuccess(response.data.posts));
      }
    } catch (error) {
      dispatch(loadingPostFail());
    }
  };

  //deletePost
  const deletePost = async (postId) =>{
    try {
      const response = await axios.delete(`${apiUrl}/post/${postId}`);
      if(response.data.success){
        dispatch(deletePost(response.data));
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => getAllPosts(), []);

  const modalOpenClose = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  //   let body;
  //   if (posts.length === 0) {
  //     body = (
  //       <>
  //         <Card className="text-center mx-5 my-5">
  //           <Card.Header as="h1">Hi Ban</Card.Header>
  //           <Card.Body>
  //             <Card.Title>Welcome to learnit</Card.Title>
  //             <Card.Text>Click Here To Create A New Post</Card.Text>
  //             <Button variant="primary">Learn It</Button>
  //           </Card.Body>
  //         </Card>
  //       </>
  //     );
  //   } else {
  //     body = (
  //       <>
  //         <Row className="row-cols-1 row-cols-md-3 g-4 mx-auto mt-3">
  //           {posts.map((post) => (
  //             <Col key={post._id} className="my-2">
  //               <SinglePost post={post} />
  //             </Col>
  //           ))}
  //         </Row>
  //       </>
  //     );
  //   }

  return (
    <>
      <ButtonAdd onClick={(e) => modalOpenClose(e)}>Add New Post</ButtonAdd>
      {/* <Toast
        show={show}
        delay={3000}
        autoHide
        onClose={setShowToast({ show: false, message: "", type: null })}
        style={{ position: "fixed", top: "20%", right: "10px" }}
        className={`bg-${type} text-white`}
      >
        <Toast.Body>
          <strong>{message}</strong>
        </Toast.Body>
      </Toast> */}
      {posts?.length === 0 ? (
        <Card className="text-center mx-5 my-5">
          <Card.Header as="h1">Hi Ban</Card.Header>
          <Card.Body>
            <Card.Title>Welcome to learnit</Card.Title>
            <Card.Text>Click Here To Create A New Post</Card.Text>
            <Button variant="primary">Learn It</Button>
          </Card.Body>
        </Card>
      ) : (
        <>
          <Row className="row-cols-1 row-cols-md-3 g-4 mx-auto mt-3">
            {posts?.map((post) => (
              <Col key={post._id} className="my-2">
                <SinglePost post={post} />
              </Col>
            ))}
          </Row>
        </>
      )}
      <ModalPost
        showModal={showModal}
        setShowModal={setShowModal}
        // setShowToast={setShowToast}
      />
    </>
  );
}

const ButtonAdd = styled.button`
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
`;

export default HomePage;
