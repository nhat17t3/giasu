import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import postsApi from "../../../api/postsApi";
import Layout from "../../../components/Layout";
// import { randomNumber } from "utils/common";
import Post from "../Post";
import { addPost, removePost, updatePost } from "../PostSlice";

AddEditPost.propTypes = {};

function AddEditPost(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { postId } = useParams();
  const isAddMode = !postId;

  const editedPost = useSelector((state) => {
    const foundPost = state.posts.posts.find((x) => x.id === +postId);
    // console.log({ posts: state.posts, postId, foundPost });
    return foundPost;
  });
  console.log({ postId, editedPost });

  const initialValues = isAddMode
    ? {
        title: "",
        grade: "",
        subject: "",
        price: "",
        phonenumber: "",
        address: "",
        time: "",
        description: "",
      }
    : editedPost;

  const handleSubmit = async (values) => {
    return new Promise((resolve) => {
      console.log("Form submit: ", values);

      setTimeout(async () => {
        if (isAddMode) {
          const newPost = {
            ...values,
            // id: 15,
          };
          await postsApi.add(newPost);
          const action = addPost(newPost);
          console.log({ action });
          dispatch(action);
        } else {
          // Do something here
          await postsApi.edit(postId, values);
          const action = updatePost(values);
          dispatch(action);
        }

        history.push("/listpost");
        resolve(true);
      }, 200);
    });
  };

  return (
    <>
      <Layout>
        <Post
          isAddMode={isAddMode}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        />
      </Layout>
    </>
  );
}

export default AddEditPost;