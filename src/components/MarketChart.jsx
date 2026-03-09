import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useCrypto } from "../context/CryptoContext";

const MarketChart = () => {
  const { coins } = useCrypto();

  const chartData = coins.map((coin) => ({
    name: coin.symbol.toUpperCase(),
    price: coin.current_price
  }));

  return (
    <div style={{ width: "100%", height: 300 }}>
      <h2>Crypto Prices</h2>
      <ResponsiveContainer>
        <BarChart data={chartData}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip/>
          <Bar dataKey="price"/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MarketChart;