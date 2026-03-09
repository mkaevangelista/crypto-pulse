import {LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer} from "recharts";
import { useCrypto } from "../context/CryptoContext";

function MarketChart() {

  const { coins } = useCrypto();

  if (!coins || coins.length === 0) {
    return <p>Loading chart...</p>;
  }

  const data = coins.map((coin) => ({
    name: coin.symbol.toUpperCase(),
    price: coin.current_price
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#4fd1c5"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default MarketChart;
