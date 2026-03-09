import { useFetchCrypto } from "../hooks/useFetchCrypto";
import MarketChart from "../components/MarketChart";

const Home = () => {
  const { loading, error } = useFetchCrypto();

  if (loading) return <p>Scanning Blockchain...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Crypto Market</h1>
      <MarketChart />
    </div>
  );
};

export default Home;