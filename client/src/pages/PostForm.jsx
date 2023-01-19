import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useCreatePost } from "../api/posts";

export const PostForm = () => {
  const { mutate } = useCreatePost();

  return (
    <div className="text-black">
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
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

            <button type="submit" className="bg-white  ">
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
