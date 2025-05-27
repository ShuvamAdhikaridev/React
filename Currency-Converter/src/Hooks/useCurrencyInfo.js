import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null); // Optional error state
  const [loading, setLoading] = useState(true); // Optional loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();

        if (!json[currency]) {
          throw new Error(`Currency "${currency}" not found in response`);
        }

        setData(json[currency]);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch currency data:", err);
        setError(err.message);
        setData({});
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currency]);

  return { data, error, loading };
}

export default useCurrencyInfo;
