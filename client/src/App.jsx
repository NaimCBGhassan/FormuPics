import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { router } from "./router";

const App = () => {
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center">
      <div className="px-10 container m-auto text-white">
        <RouterProvider router={router} />
        <Toaster />
      </div>
    </div>
  );
};

export default App;
