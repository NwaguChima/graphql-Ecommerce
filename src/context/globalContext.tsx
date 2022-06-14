import React, { createContext, useState } from "react";
import { ProductType } from "../utils/types";

type GlobalContextProviderProps = {
  children: React.ReactNode;
};

type GlobalContextType = {
  products: ProductType[];
  showModal: boolean;
  close: boolean;
  cart: ProductType[];
  totalItems: number;
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
  setCart: React.Dispatch<React.SetStateAction<ProductType[]>>;
  setTotalItems: React.Dispatch<React.SetStateAction<number>>;
};

const GlobalContext = createContext<GlobalContextType | null>(null);

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [close, setClose] = useState(false);
  const [cart, setCart] = useState<ProductType[]>([]);
  const [totalItems, setTotalItems] = useState(0);

  return (
    <GlobalContext.Provider
      value={{
        products,
        showModal,
        close,
        cart,
        totalItems,
        setProducts,
        setShowModal,
        setClose,
        setCart,
        setTotalItems,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
