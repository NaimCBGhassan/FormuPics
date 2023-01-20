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

//Creating a Post
const createPost = async (post) => {
  try {
    await axios.post("/posts", post);
  } catch (error) {
    console.log(error);
  }
};
export function useCreatePost() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation(createPost, {
    onSuccess: async (post) => {
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
