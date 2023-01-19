import { useState, useContext, createContext } from "react";

const postContext = createContext();

export const usePosts = () => {
  return useContext(postContext);
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  return (
    <postContext.Provider
      value={{
        posts,
      }}
    >
      {children}
    </postContext.Provider>
  );
};
