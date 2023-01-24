import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useQueryPost, useCreatePost, useUpdatePost } from "../api/posts";

const initialValues = {
  title: "",
  description: "",
  image: null,
};

export const PostForm = () => {
  const [post, setPost] = useState(initialValues);

  const { id } = useParams();

  if (id) {
    const { data: res } = useQueryPost(id);
    useEffect(() => {
      if (id && res) {
        const { title, description, image } = res.data;
        setPost({
          title,
          description,
          image,
        });
      }
    }, [res]);
  }

  const createPost = useCreatePost();
  const updatePost = useUpdatePost();

  return (
    <div className="flex  items-center justify-center text-white">
      <div
        className="bg-zinc-800 p-10 shadow-md shadow-black
      rounded"
      >
        <header className="flex justify-between items-center py-4 text-white">
          <h3 className="text-xl">New Post</h3>
          <Link to="/" className="text-gray-400 text-sm hover:text-gray-300 ">
            Go Back
          </Link>
        </header>
        <Formik
          initialValues={post}
          validationSchema={Yup.object({
            title: Yup.string().required("Title is required"),
            description: Yup.string().required("Description is required"),
          })}
          onSubmit={(values, actions) => {
            const params = { id, values };
            id ? updatePost.mutate(params) : createPost.mutate(values);
            debugger;
            actions.setSubmitting(false);
          }}
          enableReinitialize
        >
          {({ handleSubmit, setFieldValue, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <label htmlFor="title" className="text-sm block font-bold text-gray-400">
                Title
              </label>
              <Field
                name="title"
                className="px-3 py-2 mb-6 focus:outline-none rounded bg-gray-600 w-full"
                placeholder="title"
              />
              <ErrorMessage component="p" className="text-red-400 text-sm" name="title" />

              <label htmlFor="description" className="text-sm block font-bold text-gray-400">
                Description
              </label>
              <Field
                component="textarea"
                name="description"
                className="px-3 py-2 mb-6 focus:outline-none rounded bg-gray-600 w-full"
                placeholder="description"
                rows="3"
              />
              <ErrorMessage component="p" className="text-red-400 text-sm" name="description" />

              <input
                type="file"
                name="image"
                className="px-3 py-2 focus:outline-none rounded bg-gray-600 w-full"
                onChange={(e) => setFieldValue("image", e.target.files[0])}
              />

              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded mt-2 focus:outline-none"
                disabled={isSubmitting}
              >
                {isSubmitting ? <AiOutlineLoading3Quarters className="animate-spin h-5 w-5" /> : "Save"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
