const base = "https://api.currencybeacon.com/v1/";
const apiKey = import.meta.env.VITE_API_KEY;

const getCurrencies = async () => {
  const type = "fiat";

  const endpoint = new URL("currencies?", base);
  endpoint.searchParams.append("type", type);
  endpoint.searchParams.append("api_key", apiKey);

  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error("Request error");
  }

  const dataObject = await response.json();

  return dataObject.response;
};

export { getCurrencies };
