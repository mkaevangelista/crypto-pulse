import { useEffect, useState } from "react";
import { useCrypto } from "../context/CryptoContext";

export function useFetchCrypto() {

  const { setCoins } = useCrypto();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    async function fetchData() {
      try {

        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1"
        );

        const data = await res.json();

        setCoins(data);

      } catch (err) {
        setError("Failed to fetch");
      }

      setLoading(false);
    }

    fetchData();

  }, [setCoins]);

  return { loading, error };
}