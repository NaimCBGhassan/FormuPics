import { toast } from "react-hot-toast";

export const Post = ({ post }) => {
  const handleDelete = (t) => {
    toast.custom(
      <div>
        <p>Do you want to delete?</p>
        <div>
          <button>Eleminar</button>
          <button className="bg-slate-400 hover:bg-slate-500 px-3 py-2 rounded-sm mx-2" onClick={() => toast.remove()}>
            Cancelar
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-zinc-800 rounded-sm shadow-md shadow-black hover:bg-zinc-700 hover:cursor-pointer ">
      <div className="px-4 py-7">
        <div className="flex justify-between mb-5">
          <h3>{post.title}</h3>
          <button className="bg-red-600 text-sm px-2 py-1 rounded" onClick={handleDelete}>
            Delete
          </button>
        </div>
        <p className="text-center">{post.description}</p>
      </div>
    </div>
  );
};
