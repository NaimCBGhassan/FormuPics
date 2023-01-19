import { Formik, Form, Field } from "formik";
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
        onSubmit={(values, actions) => {
          mutate(values);
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field name="title" className="block mb-2" placeholder="title" />
            <Field name="description" className="block mb-2" placeholder="description" />
            <button type="submit" className="bg-white  ">
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
