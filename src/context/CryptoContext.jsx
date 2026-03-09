import { createContext, useContext, useState } from "react";

const CryptoContext = createContext();

export function CryptoProvider({ children }) {

  const [coins, setCoins] = useState([]);

  return (
    <CryptoContext.Provider value={{ coins, setCoins }}>
      {children}
    </CryptoContext.Provider>
  );
}

export function useCrypto() {
  return useContext(CryptoContext);
}