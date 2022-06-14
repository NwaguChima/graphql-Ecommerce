import React, { createContext, useState } from "react";
import { ProductType } from "../utils/types";

type GlobalContextProviderProps = {
  children: React.ReactNode;
};

type GlobalContextType = {
  products: ProductType[];
  showModal: boolean;
  close: boolean;
  cart: ProductType[] | [];
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
  setCart: React.Dispatch<React.SetStateAction<ProductType[] | []>>;
};

const GlobalContext = createContext<GlobalContextType | null>(null);

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [close, setClose] = useState(false);
  const [cart, setCart] = useState<ProductType[] | []>([]);

  return (
    <GlobalContext.Provider
      value={{
        products,
        showModal,
        close,
        cart,
        setProducts,
        setShowModal,
        setClose,
        setCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
