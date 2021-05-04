import "./App.css";
import ProductCard from "./components/ProductCard";
import oneplus9r from "../src/assets/img/oneplus9r.jpg";
function App() {
  return (
    <div className="App">
      <div className="container">
        <ProductCard
          name="OnePlus 9R 5G (Carbon Black, 12GB RAM, 256 GB Storage)"
          thumb={oneplus9r}
          color="Carbon Black"
          price="43,999"
          rating="5"
          reviewCount="349"
          isPrime={true}
        />
      </div>
    </div>
  );
}

export default App;
