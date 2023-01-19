import { Link } from "react-router-dom";
import { useQueryPosts } from "../api/posts.jsx";
import { EmptyWindow, Loading } from "../components";

export const HomePage = () => {
  const { data: res, isLoading } = useQueryPosts();

  if (isLoading) {
    <Link to="/new">Create new post</Link>;

    return <Loading />;
  }

  if (!isLoading) {
    const { data: posts } = res;
    if (posts.length === 0) {
      return (
        <>
          <Link to="/new">Create new post</Link>
          <EmptyWindow />
        </>
      );
    }

    return (
      <>
        <Link to="/new">Create new post</Link>

        {posts.map((post, index) => (
          <div key={post._id}>{post.title}</div>
        ))}
      </>
    );
  }
};
