import { useContext, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import GlobalContext from "./context/globalContext";
import Spinner from "./components/spinner/Spinner";
import Modal from "./components/modal/Modal";
import styles from "./App.module.scss";

const Product = lazy(() => import("./pages/Product"));
const Header = lazy(() => import("./components/header/Header"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Shop = lazy(() => import("./pages/Shop"));
const Learn = lazy(() => import("./pages/Learn"));

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
        <Suspense
          fallback={
            <div>
              <Spinner />
            </div>
          }
        >
          <Router>
            <Routes>
              <Route path="/products" element={<Product />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </Suspense>
        <Modal />
      </ApolloProvider>
    </div>
  );
}

export default App;
