import { useState } from "react";
import { useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useCreatePost } from "../api/posts";

export const PostForm = () => {
  const [post, setPost] = useState({
    title: "",
    description: "",
  });
  const { mutate } = useCreatePost();
  const params = useParams();

  return (
    <div className="text-white">
      <Formik
        initialValues={post}
        validationSchema={Yup.object({
          title: Yup.string().required("Title is required"),
          description: Yup.string().required("Description is required"),
        })}
        onSubmit={(values, actions) => {
          mutate(values);
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              name="title"
              className="px-3 py-2 mb-6 focus:outline-none rounded bg-gray-600 w-full"
              placeholder="title"
            />
            <ErrorMessage component="p" className="text-red-400 text-sm" name="title" />

            <Field
              name="description"
              className="px-3 py-2 mb-6 focus:outline-none rounded bg-gray-600 w-full"
              placeholder="description"
            />
            <ErrorMessage component="p" className="text-red-400 text-sm" name="description" />

            <button type="submit" className="bg-white text-black px-4 py-2 rounded">
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
