interface FetchAPI {
  api: string;
}
const fetchApiCall = async ({ api }: FetchAPI) => {
  try {
    const options = {
      header: { "Content-Type": "application/json" },
      method: "GET",
    };
    const response = await fetch(api, options);
    return response;
  } catch (error) {
    return error;
  }
};

export default fetchApiCall;
