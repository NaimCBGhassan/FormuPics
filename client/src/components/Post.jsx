import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDeletePost } from "../api/posts";

export const Post = ({ post }) => {
  const { mutate } = useDeletePost();

  const navigate = useNavigate();

  const handleDelete = (id) => {
    toast(
      (t) => (
        <div className="text-white">
          <p className="text-center mb-2">Do you want to delete?</p>
          <div>
            <button
              className="bg-red-500 hover:bg-red-400 px-3 py-2 text-sm rounded-sm mx-2"
              onClick={() => {
                mutate(id);
                toast.remove(t.id);
              }}
            >
              Eleminar
            </button>
            <button
              className="bg-slate-400 hover:bg-slate-500 px-3 py-2 rounded-sm mx-2"
              onClick={() => toast.remove(t.id)}
            >
              Cancelar
            </button>
          </div>
        </div>
      ),
      {
        style: {
          background: "#353535",
          boxShadow: "4px 4px 2px black",
          borderRadius: "6px",
        },
      }
    );
  };

  return (
    <div
      className=" bg-zinc-800 rounded-sm shadow-lg shadow-black hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => navigate(`/${post._id}`)}
    >
      <div className="px-4 py-7">
        <div className="flex justify-between mb-5">
          <h3>{post.title}</h3>
          <button
            className="bg-red-600 hover:bg-red-500 text-sm px-2 py-1 rounded"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(post._id);
            }}
          >
            Delete
          </button>
        </div>
        <p className="text-center">{post.description}</p>
      </div>
      {post.image && <img src={post.image.url} className="w-full object-cover"></img>}
    </div>
  );
};
