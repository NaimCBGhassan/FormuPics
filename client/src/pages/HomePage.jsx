import { usePosts } from "../context/postContext";
import { NavLink } from "react-router-dom";
import { useQueryPosts } from "../api/posts.jsx";

export const HomePage = () => {
  const { data, isLoading, isError } = useQueryPosts();
  console.log(data);
  console.log(isLoading);

  return (
    <div>
      <h1>HomaPage</h1>
    </div>
  );
};
