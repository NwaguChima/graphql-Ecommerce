import React, { createContext, useState } from "react";
import { ProductType } from "../utils/types";

type GlobalContextProviderProps = {
  children: React.ReactNode;
};

type GlobalContextType = {
  products: ProductType[];
  showModal: boolean;
  close: boolean;
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
};

const GlobalContext = createContext<GlobalContextType | null>(null);

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [products, setProducts] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [close, setClose] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        products,
        showModal,
        close,
        setProducts,
        setShowModal,
        setClose,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
