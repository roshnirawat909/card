import React, { createContext, useState } from "react";

export const MyStore = createContext(null);

export function MyStoreProvider({ children }) {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <MyStore.Provider value={{ data, setData, cart, setCart, isCartOpen, setIsCartOpen }}>
      {children}
    </MyStore.Provider>
  );
}


export default MyStoreProvider;
