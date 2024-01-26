const base = "https://api.currencybeacon.com/v1/";
const apiKey = import.meta.env.VITE_API_KEY;

const getCurrencies = async () => {
  const endpoint = new URL(`currencies?type=fiat&api_key=${apiKey}`, base);
  const data = await fetchData(endpoint);

  return data.response;
};

const getFeaturedCurrencies = async (currencyBase: string, symbols: string) => {
  const endpoint = new URL("latest?", base);
  endpoint.searchParams.append("base", currencyBase);
  endpoint.searchParams.append("symbols", symbols);
  endpoint.searchParams.append("api_key", apiKey);
  const data = await fetchData(endpoint);

  return data.rates;
};

const fetchData = async (endpoint: string | URL) => {
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error("Request error");
  }

  return await response.json();
};

export { getCurrencies, getFeaturedCurrencies };
