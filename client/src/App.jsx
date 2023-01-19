import { RouterProvider } from "react-router-dom";
import { PostProvider } from "./context/postContext";

import { router } from "./router";

const App = () => {
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center">
      <div className="px-10 container m-auto text-white">
        <PostProvider>
          <RouterProvider router={router} />
        </PostProvider>
      </div>
    </div>
  );
};

export default App;
