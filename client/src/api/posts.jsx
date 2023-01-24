import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

//Getting Posts
const getPosts = async () => await axios.get("/posts");
export function useQueryPosts() {
  return useQuery(["posts"], getPosts, {
    refetchOnWindowFocus: false,
    refetchInterval: false,
    refetchIntervalInBackground: false,
  });
}

//Getting Post
const getPost = async (id) => await axios.get(`/posts/${id}`);
export function useQueryPost(id) {
  return useQuery(["post"], () => getPost(id), {
    refetchOnWindowFocus: false,
    refetchInterval: false,
    refetchIntervalInBackground: false,
    retry: false,
  });
}

//Creating a Post
const createPost = async (post) => {
  try {
    const form = new FormData();

    for (let key in post) {
      form.append(key, post[key]);
    }

    return await axios.post("/posts", form, {
      header: { "Content-Type": "multipart/form-data" },
    });
  } catch (error) {
    console.log(error);
  }
};
export function useCreatePost() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation(createPost, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(["posts"]);
      navigate("/");
    },
  });
}

//Updating a Post
const updatingPost = async (params) => {
  try {
    const { id, values: post } = params;
    await axios.put(`/posts/${id}`, post);
  } catch (error) {
    console.log(error);
  }
};

export function useUpdatePost() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation(updatingPost, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(["posts"]);
      navigate("/");
    },
  });
}

//Deleting a Post
const deletePost = async (id) => {
  try {
    await axios.delete(`posts/${id}`);
  } catch (error) {
    console.log(error);
  }
};
export function useDeletePost() {
  const queryClient = useQueryClient();

  return useMutation(deletePost, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(["posts"]);
    },
  });
}
