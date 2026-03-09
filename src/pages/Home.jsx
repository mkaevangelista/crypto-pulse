import { useFetchCrypto } from "../hooks/useFetchCrypto";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useCrypto } from "../context/CryptoContext";
import MarketChart from "../components/MarketChart";

function Home() {

  const { loading, error } = useFetchCrypto();
  const { coins } = useCrypto();
  const [search, setSearch] = useLocalStorage("crypto-search", "");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="content">

      <h1>Market Overview</h1>

      <input
        type="text"
        placeholder="Search coin (e.g. BTC, Ethereum)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="chart-container">
        <MarketChart />
      </div>

      <table>

        <thead>
          <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>24h Change</th>
            <th>Market Cap</th>
          </tr>
        </thead>

        <tbody>

          {filteredCoins.map((coin) => (

            <tr key={coin.id}>
              <td>{coin.name}</td>
              <td>${coin.current_price}</td>
              <td>{coin.price_change_percentage_24h?.toFixed(2)}%</td>
              <td>${coin.market_cap.toLocaleString()}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Home;
