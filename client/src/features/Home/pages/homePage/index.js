import React, { useEffect } from "react";
import axios from "axios";
import { apiUrl } from "../../../../common/apiConstant";
import { useDispatch, useSelector } from "react-redux";
import { loadingPostSuccess, loadingPostFail } from "../../postSlice";
import { Card, Button, Row, Col } from "react-bootstrap";
import SinglePost from "../../components/SinglePost";

function HomePage() {
  // Hooks
  const { postsLoading, posts } = useSelector((state) => state.post);
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

  useEffect(() => getAllPosts(), []);

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
        <Row className="row-cols-1 row-cols-md-3 g-4 mx-auto mt-3">
          {posts?.map((post) => (
            <Col key={post._id} className="my-2">
              <SinglePost post={post} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}

export default HomePage;
