"use client";

import { useFavorite } from "@/context/favoriteContext";

const Btn = ({ id }) => {
  const { favoriteList, addFavoriteList } = useFavorite();
  console.log("favoriteList: ", favoriteList, favoriteList.includes(id));
  return (
    <>
      {favoriteList.includes(id) ? (
        <button className="flex text-white bg-blue-600 w-[200px] h-[60px] ml-auto mt-10">
          Remove from Favorites
        </button>
      ) : (
        <button className="flex text-white bg-blue-600 w-[200px] h-[60px] ml-auto mt-10">
          Add to Favorites
        </button>
      )}
    </>
  );
};

export default Btn;
