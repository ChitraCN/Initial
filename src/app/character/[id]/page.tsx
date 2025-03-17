import fetchApiCall from "@/app/service";
import Btn from "@/components/btn";
import apiUrl from "@/utils/endpoints";

const getPeopleList = async (id: number) => {
  const response = await fetchApiCall({ api: apiUrl.get_people + "/" + id });
  const result = await response.json();
  return result;
};

export default async function Character({ params }) {
  const { id } = params;
  console.log("searchParams: ", id);
  const response = await getPeopleList(id);

  return (
    <>
      <div>{<Btn id={id} />}</div>

      {response && (
        <>
          <h2>{response?.name}</h2>
          <div>{`Gender: ${response?.gender}`}</div>
          <div>{`Hair Color: ${response?.hair_color}`}</div>
          <div>{`Eye Color: ${response?.eye_color}`}</div>
          <div>{`Height: ${response?.height}`}</div>
          <div>{`Birth Year: ${response?.birth_year}`}</div>
          {/* <div>{`Home World: ${response?.}`}</div> */}
          <div>{`Skin Color: ${response?.skin_color}`}</div>
          <div>{`Mass: ${response?.mass}`}</div>
        </>
      )}
    </>
  );
}
