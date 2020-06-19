const API_URL = "https://www.googleapis.com/books/v1/volumes?q=HARRY%20POTTER";

const fetchOptions: RequestInit = {
  method: "GET",
  headers: new Headers(),
  mode: "cors",
  cache: "default"
};

export const GetBooksApi = async () => {
  const response = await fetch(`${API_URL}`, fetchOptions);
  const json = await response.json();

  return json;
};

export const GetMoreBooksApi = async (index: number) => {
  const response = await fetch(`${API_URL}&startIndex=${index}`, fetchOptions);
  const json = await response.json();

  return json;
};
