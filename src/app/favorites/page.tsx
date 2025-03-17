"use client";

import { useFavorite } from "@/context/favoriteContext";
import ButtonComponent from "@/ui/button";
import { useRouter } from "next/navigation";
import fetchApiCall from "../service";
import { useCallback, useEffect, useState } from "react";
import apiUrl from "@/utils/endpoints";
import Cards from "@/components/card";

const Favorites = () => {
  const { favoriteList, addFavoriteList } = useFavorite();
  const router = useRouter();

  const onButtonClick = () => {
    router.push("/");
  };

  const onRemove = useCallback((id: number) => {
    addFavoriteList(id);
  }, []);

  const getPeopleList = useCallback(async (id: number) => {
    const response = await fetchApiCall({
      api: apiUrl.get_people + "/" + id,
    });
    const data = await response.json();
    const res = data?.results;
    const cardList = (
      <Cards
        cardList={res}
        keyValue={res?.name + res?.birth_year}
        id={id}
        onFavoriteClick={onRemove}
        // onViewDetailClick={onViewDetailClick}
        // isFavorite={favoriteList?.includes(id) ? true : false}
        name={res?.name}
      />
    );
    return cardList;
  }, []);

  const [data, setdata] = useState(null);

  useEffect(() => {
    const data = favoriteList?.map((id) => getPeopleList(id));
    setdata(data);
  }, [favoriteList]);

  return (
    <>
      {favoriteList?.length > 0 ? (
        <div className="flex flex-wrap p-[20px]">
          {/* {favoriteList?.map((id) => getPeopleList(id))} */}
          {data}
        </div>
      ) : (
        <div>
          <h2>My Favorite Characters</h2>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="54px"
              viewBox="0 0 24 24"
              width="54px"
              fill="#EA3323"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <div>
            <h2 className="">No favorites added yet</h2>
            <p>
              Add characters to your favorites list and they'll show up here.
            </p>
          </div>
          <ButtonComponent
            name="Browse Characters"
            onButtonClick={onButtonClick}
          ></ButtonComponent>
        </div>
      )}
    </>
  );
};

export default Favorites;
