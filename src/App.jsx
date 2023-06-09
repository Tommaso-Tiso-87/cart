import "./App.css";
import {
  BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import NavbarPanel from "./components/NavbarPanel";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <NavbarPanel />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
