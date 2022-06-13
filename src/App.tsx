import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import GlobalContext from "./context/globalContext";
import Product from "./pages/Product";
import Header from "./components/header/Header";
import NotFound from "./pages/NotFound";
import Shop from "./pages/Shop";
import Learn from "./pages/Learn";
import Modal from "./components/modal/Modal";
import styles from "./App.module.scss";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        products: {
          merge(_, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "https://pangaea-interviews.now.sh/api/graphql",
  cache,
});

function App() {
  const { showModal } = useContext(GlobalContext)!;

  return (
    <div className={`${styles.App} ${showModal ? styles.modal : ""}`}>
      <ApolloProvider client={client}>
        <Header />
        <Router>
          <Routes>
            <Route path="/products" element={<Product />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        <Modal />
      </ApolloProvider>
    </div>
  );
}

export default App;
