import apiUrl from "@/utils/endpoints";
import HomePage from "./home/page";
import fetchApiCall from "./service";

const getPeopleList = async () => {
  const response = await fetchApiCall({ api: apiUrl.get_people });
  const result = await response.json();
  return result;
};

export default async function Home() {
  const response = await getPeopleList();

  return (
    <>
      <HomePage peopleListResponse={response} />
    </>
  );
}
