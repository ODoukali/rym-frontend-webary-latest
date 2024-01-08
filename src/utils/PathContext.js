import React, { createContext, useContext, useState } from "react";

const PathContext = createContext();

export const PathProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState("/");

  const setPath = (newPath) => {
    setCurrentPath(newPath);
  };

  return (
    <PathContext.Provider value={{ currentPath, setPath }}>
      {children}
    </PathContext.Provider>
  );
};

export const usePath = () => {
  return useContext(PathContext);
};
