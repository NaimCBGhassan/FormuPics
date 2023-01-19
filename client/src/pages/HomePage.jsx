import { Link } from "react-router-dom";
import { useQueryPosts } from "../api/posts.jsx";
import { EmptyWindow, Loading, Post } from "../components";

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
      <div>
        <Link to="/new">Create new post</Link>
        <div className="grid grid-cols-3 gap-3">
          {posts.map((post, index) => (
            <Post key={post._id} post={post} />
          ))}
        </div>
      </div>
    );
  }
};
