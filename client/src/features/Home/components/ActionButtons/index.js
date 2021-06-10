import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { apiUrl } from "../../../../common/apiConstant";
import {deletePost} from "../../postSlice";
function ActionButtons({ url, _id }) {
  const dispatch = useDispatch();
  //deletePost
  const deletePostIt = async (postId) =>{
    try {
      const response = await axios.delete(`${apiUrl}/post/${postId}`);
      if(response.data.success){
        dispatch(deletePost(response.data));
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Button className="post-button" href={url} target="_blank">
        Watch It
      </Button>
      <Button className="post-button" onClick={() => deletePostIt(_id)}>Delete</Button>
      <Button className="post-button">Edit</Button>
    </>
  );
}

export default ActionButtons;
