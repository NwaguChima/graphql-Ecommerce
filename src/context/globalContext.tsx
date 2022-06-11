import React, { createContext, useState } from "react";

type GlobalContextProviderProps = {
  children: React.ReactNode;
};

type GlobalContextType = {
  products: any[];
  setProducts: React.Dispatch<React.SetStateAction<any[]>>;
};

const GlobalContext = createContext<GlobalContextType | null>(null);

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [products, setProducts] = useState<any[]>([]);

  return (
    <GlobalContext.Provider
      value={{
        products,
        setProducts,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
