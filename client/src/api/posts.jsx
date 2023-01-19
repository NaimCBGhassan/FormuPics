import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

const getPosts = async () => await axios.get("/posts");

export function useQueryPosts() {
  return useQuery(["posts"], getPosts, {
    refetchOnWindowFocus: false,
    refetchInterval: false,
    refetchIntervalInBackground: false,
  });
}

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
