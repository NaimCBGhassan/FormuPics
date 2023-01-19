import axios from "axios";
import { useQuery } from "react-query";

const getPosts = async () => await axios.get("/posts");

export function useQueryPosts() {
  return useQuery(["posts"], getPosts, {
    refetchOnWindowFocus: false,
    refetchInterval: false,
    refetchIntervalInBackground: false,
  });
}
