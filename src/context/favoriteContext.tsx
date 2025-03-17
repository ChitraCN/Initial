"use client";

import { createContext, useState, ReactNode, useContext } from "react";

interface FavoriteContextType {
  favoriteList: any;
  addFavoriteList: () => void;
}

export const FavoriteContext = createContext<FavoriteContextType | {}>({});

export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
  const [favoriteList, setFavoriteList] = useState<any>([]);
  console.log("favoriteList: ", favoriteList);

  const addFavoriteList = (newListId: number) => {
    setFavoriteList((prevList: any) =>
      !prevList?.includes(newListId)
        ? [...prevList, newListId]
        : prevList.filter((list: number) => list !== newListId)
    );
  };

  return (
    <FavoriteContext.Provider value={{ favoriteList, addFavoriteList }}>
      {children}
    </FavoriteContext.Provider>
  );
};

// Custom hook to use the context
export const useFavorite = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
