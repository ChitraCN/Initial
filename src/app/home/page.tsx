"use client";

import Cards from "@/components/card";
import ButtonComponent from "@/ui/button";
import { useCallback, useEffect, useState } from "react";
import fetchApiCall from "../service";
import { useFavorite } from "@/context/favoriteContext";
import apiUrl from "@/utils/endpoints";
import { useRouter } from "next/navigation";

interface HomePageProps {
  peopleListResponse: {
    count: number;
    next: null | string;
    previous: null | string;
    results: null | string[];
  };
}

const HomePage = ({ peopleListResponse }: HomePageProps) => {
  console.log("homePage");
  const router = useRouter();
  const [peopleList, setPeopleList] = useState(peopleListResponse);
  const { favoriteList, addFavoriteList } = useFavorite();

  const getPeopleList = useCallback(
    async (apiUrl: string | null) => {
      const response = await fetchApiCall({
        api: apiUrl,
      });
      const result = await response.json();
      setPeopleList(result);
      // return result;
    },
    [peopleList]
  );

  console.log("peopleList: ", peopleList);

  const onFavoriteClick = useCallback((id: number) => {
    addFavoriteList(id);
  }, []);

  const onViewDetailClick = (id: number) => {
    // getPeopleList(apiUrl?.get_people + "/" + id)
    router.push(`/character/${id}`);
  };

  const onPrevious = useCallback(() => {
    getPeopleList(peopleList?.previous);
  }, [peopleList]);

  const onNext = useCallback(() => {
    getPeopleList(peopleList?.next);
    console.log("peopleList?.next: ", peopleList?.next);
  }, [peopleList]);

  useEffect(() => {}, []);

  return (
    <div>
      <h1 className="text-xl font-bold">Star Wars Characters</h1>
      <div className="flex flex-wrap p-[20px]">
        {peopleList?.results
          ? peopleList?.results?.map((res, index) => (
              <Cards
                cardList={res}
                keyValue={res?.name + res?.birth_year}
                id={index + 1}
                onFavoriteClick={onFavoriteClick}
                onViewDetailClick={onViewDetailClick}
                isFavorite={favoriteList?.includes(index + 1) ? true : false}
                name={res?.name}
                showFavorite={true}
              />
            ))
          : "No Cards"}
      </div>
      <div className="flex justify-between mt-4">
        <ButtonComponent
          name="Previous"
          onButtonClick={onPrevious}
          isdisabled={peopleList?.previous === null ? true : false}
        ></ButtonComponent>
        <ButtonComponent
          name="Next"
          onButtonClick={onNext}
          isdisabled={false}
        ></ButtonComponent>
      </div>
    </div>
  );
};

export default HomePage;
