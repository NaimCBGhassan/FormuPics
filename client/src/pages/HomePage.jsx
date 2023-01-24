import { Link } from "react-router-dom";
import { useQueryPosts } from "../api/posts.jsx";
import { EmptyWindow, Loading, Post } from "../components";

export const HomePage = () => {
  const { data: res, isLoading } = useQueryPosts();

  return (
    <div>
      <header className="flex justify-between items-center py-4">
        <h1 className="text-2xl text-gray-400 font-bold">Posts ({res?.data.length || 0})</h1>
        <Link to="/new" className="px-3 py-2 bg-indigo-500 hover:bg-indigo-600  text-white">
          Create new post
        </Link>
      </header>

      {res?.data.length === 0 && <EmptyWindow />}

      {isLoading && <Loading />}

      <div className="grid grid-cols-3 gap-5">
        {res?.data.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};
