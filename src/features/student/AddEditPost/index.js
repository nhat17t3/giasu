import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Layout from "../../../components/Layout";
import Post from "../Post";
import { EditPost, GetPosts, NewPost } from "../../../api/postsApi";
import { useEffect } from "react";

AddEditPost.propTypes = {};

function AddEditPost(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { postId } = useParams();
  const isAddMode = !postId;

  useEffect(() => {
    GetPosts(dispatch);
  }, []);

  const editedPost = useSelector((state) => {
    const foundPost = state.posts.posts.find((x) => x.id === +postId);
    return foundPost;
  });

  //   const {
  //     id,
  //     title,
  //     grade,
  //     subject,
  //     price,
  //     phonenumber,
  //     address,
  //     time,
  //     description,
  //     schedule,
  //     sang_2,
  //     chieu_2,
  //     toi_2,
  //     sang_3,
  //     chieu_3,
  //     toi_3,
  //     sang_4,
  //     chieu_4,
  //     toi_4,
  //     sang_5,
  //     chieu_5,
  //     toi_5,
  //     sang_6,
  //     chieu_6,
  //     toi_6,
  //     sang_7,
  //     chieu_7,
  //     toi_7,
  //     sang_8,
  //     chieu_8,
  //     toi_8,
  // } = {...editedPost};
  //   if (schedule.sang_2 === true) sang_2 = true;
  //   if (schedule.chieu_2 === true) chieu_2 = true;
  //   if (schedule.toi_2 === true) toi_2 = true;

  //   if (schedule.sang_3 === true) sang_3 = true;
  //   if (schedule.chieu_3 === true) chieu_3 = true;
  //   if (schedule.toi_3 === true) toi_3 = true;

  //   if (schedule.sang_4 === true) sang_4 = true;
  //   if (schedule.chieu_4 === true) chieu_4 = true;
  //   if (schedule.toi_4 === true) toi_4 = true;

  //   if (schedule.sang_5 === true) sang_5 = true;
  //   if (schedule.chieu_5 === true) chieu_5 = true;
  //   if (schedule.toi_5 === true) toi_5 = true;

  //   if (schedule.sang_6 === true) sang_6 = true;
  //   if (schedule.chieu_6 === true) chieu_6 = true;
  //   if (schedule.toi_6 === true) toi_6 = true;

  //   if (schedule.sang_7 === true) sang_7 = true;
  //   if (schedule.chieu_7 === true) chieu_7 = true;
  //   if (schedule.toi_7 === true) toi_7 = true;

  //   if (schedule.sang_8 === true) sang_8 = true;
  //   if (schedule.chieu_8 === true) chieu_8 = true;
  //   if (schedule.toi_8 === true) toi_8 = true;

  //   if (schedule.sang_2 === true) sang_2 = true;
  //   if (schedule.chieu_2 === true) chieu_2 = true;
  //   if (schedule.toi_2 === true) toi_2 = true;

  //   const k = {
  //     id,
  //     title,
  //     grade,
  //     subject,
  //     price,
  //     phonenumber,
  //     address,
  //     time,
  //     description,
  //     schedule,
  //     sang_2,
  //     chieu_2,
  //     toi_2,
  //     sang_3,
  //     chieu_3,
  //     toi_3,
  //     sang_4,
  //     chieu_4,
  //     toi_4,
  //     sang_5,
  //     chieu_5,
  //     toi_5,
  //     sang_6,
  //     chieu_6,
  //     toi_6,
  //     sang_7,
  //     chieu_7,
  //     toi_7,
  //     sang_8,
  //     chieu_8,
  //     toi_8,
  //   };

  console.log("editttpos", editedPost);

  const v = useSelector((state) => state.posts.posts);
  if (v.length == 0) return null;

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
        schedule: {
          sang_2: false,
          chieu_2: false,
          toi_2: false,
          sang_3: false,
          chieu_3: false,
          toi_3: false,
          sang_4: false,
          chieu_4: false,
          toi_4: false,
          sang_5: false,
          chieu_5: false,
          toi_5: false,
          sang_6: false,
          chieu_6: false,
          toi_6: false,
          sang_7: false,
          chieu_7: false,
          toi_7: false,
          sang_8: false,
          chieu_8: false,
          toi_8: false,
        },
      }
    : {
        title: editedPost.title,
        grade: editedPost.grade,
        subject: editedPost.subject,
        price: editedPost.price,
        phonenumber: editedPost.phonenumber,
        address: editedPost.address,
        time: editedPost.time,
        description: editedPost.description,
        sang_2: editedPost.schedule.sang_2,
        chieu_2: editedPost.schedule.chieu_2,
        toi_2: editedPost.schedule.toi_2,
        sang_3: editedPost.schedule.sang_3,
        chieu_3: editedPost.schedule.chieu_3,
        toi_3: editedPost.schedule.toi_3,
        sang_4: editedPost.schedule.sang_4,
        chieu_4: editedPost.schedule.chieu_4,
        toi_4: editedPost.schedule.toi_4,
        sang_5: editedPost.schedule.sang_5,
        chieu_5: editedPost.schedule.chieu_5,
        toi_5: editedPost.schedule.toi_5,
        sang_6: editedPost.schedule.sang_6,
        chieu_6: editedPost.schedule.chieu_6,
        toi_6: editedPost.schedule.toi_6,
        sang_7: editedPost.schedule.sang_7,
        chieu_7: editedPost.schedule.chieu_7,
        toi_7: editedPost.schedule.toi_7,
        sang_8: editedPost.schedule.sang_8,
        chieu_8: editedPost.schedule.chieu_8,
        toi_8: editedPost.schedule.toi_8,
        schedule: {
          sang_2: false,
          chieu_2: false,
          toi_2: false,
          sang_3: false,
          chieu_3: false,
          toi_3: false,
          sang_4: false,
          chieu_4: false,
          toi_4: false,
          sang_5: false,
          chieu_5: false,
          toi_5: false,
          sang_6: false,
          chieu_6: false,
          toi_6: false,
          sang_7: false,
          chieu_7: false,
          toi_7: false,
          sang_8: false,
          chieu_8: false,
          toi_8: false,
        },
      };

  const handleSubmit = async (values) => {
    return new Promise((resolve) => {
      console.log("Form submit: ", values);
      // console.log(values);

      setTimeout(async () => {
        if (isAddMode) {
          const {
            title,
            grade,
            subject,
            price,
            phonenumber,
            address,
            time,
            description,
            schedule,
          } = { ...values };
          console.log(schedule, "schedule");
          if (values.sang_2 === true) schedule.sang_2 = true;
          if (values.chieu_2 === true) schedule.chieu_2 = true;
          if (values.toi_2 === true) schedule.toi_2 = true;

          if (values.sang_3 === true) schedule.sang_3 = true;
          if (values.chieu_3 === true) schedule.chieu_3 = true;
          if (values.toi_3 === true) schedule.toi_3 = true;

          if (values.sang_4 === true) schedule.sang_4 = true;
          if (values.chieu_4 === true) schedule.chieu_4 = true;
          if (values.toi_4 === true) schedule.toi_4 = true;

          if (values.sang_5 === true) schedule.sang_5 = true;
          if (values.chieu_5 === true) schedule.chieu_5 = true;
          if (values.toi_5 === true) schedule.toi_5 = true;

          if (values.sang_6 === true) schedule.sang_6 = true;
          if (values.chieu_6 === true) schedule.chieu_6 = true;
          if (values.toi_6 === true) schedule.toi_6 = true;

          if (values.sang_7 === true) schedule.sang_7 = true;
          if (values.chieu_7 === true) schedule.chieu_7 = true;
          if (values.toi_7 === true) schedule.toi_7 = true;

          if (values.sang_8 === true) schedule.sang_8 = true;
          if (values.chieu_8 === true) schedule.chieu_8 = true;
          if (values.toi_8 === true) schedule.toi_8 = true;

          const newPost = {
            title,
            grade,
            subject,
            price,
            phonenumber,
            address,
            time,
            description,
            schedule,
            // id: 15,
          };
          console.log(newPost, "new post");
          NewPost(dispatch, newPost);
        } else {
          const {
            id,
            title,
            grade,
            subject,
            price,
            phonenumber,
            address,
            time,
            description,
            schedule,
          } = { ...values };
          if (values.sang_2 === true) schedule.sang_2 = true;
          if (values.chieu_2 === true) schedule.chieu_2 = true;
          if (values.toi_2 === true) schedule.toi_2 = true;

          if (values.sang_3 === true) schedule.sang_3 = true;
          if (values.chieu_3 === true) schedule.chieu_3 = true;
          if (values.toi_3 === true) schedule.toi_3 = true;

          if (values.sang_4 === true) schedule.sang_4 = true;
          if (values.chieu_4 === true) schedule.chieu_4 = true;
          if (values.toi_4 === true) schedule.toi_4 = true;

          if (values.sang_5 === true) schedule.sang_5 = true;
          if (values.chieu_5 === true) schedule.chieu_5 = true;
          if (values.toi_5 === true) schedule.toi_5 = true;

          if (values.sang_6 === true) schedule.sang_6 = true;
          if (values.chieu_6 === true) schedule.chieu_6 = true;
          if (values.toi_6 === true) schedule.toi_6 = true;

          if (values.sang_7 === true) schedule.sang_7 = true;
          if (values.chieu_7 === true) schedule.chieu_7 = true;
          if (values.toi_7 === true) schedule.toi_7 = true;

          if (values.sang_8 === true) schedule.sang_8 = true;
          if (values.chieu_8 === true) schedule.chieu_8 = true;
          if (values.toi_8 === true) schedule.toi_8 = true;
          const editPost = {
            id:postId,
            title,
            grade,
            subject,
            price,
            phonenumber,
            address,
            time,
            description,
            schedule,
          };
          console.log("edit post",editPost );
          // Do something here
          // await postsApi.edit(postId, values);
          // const action = updatePost(values);
          // dispatch(action);
          EditPost(dispatch, editPost);
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
