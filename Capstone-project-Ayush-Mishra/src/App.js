import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Product from "./pages/productPage/Product";
import ProductDetails from "./pages/productPage/Product-details";
import { store } from "./redux/store";
function App() {
  return (
      <Provider store={store} >
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} exact />
            {/* <Route path="/product" element={<Product />} exact /> */}
            <Route path="/product" element={<Product />} exact />
            <Route path="/about" element={<About />} exact />
            <Route path="/contact" element={<Contact />} exact />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </Router>
      </Provider >
  );
}

export default App;
