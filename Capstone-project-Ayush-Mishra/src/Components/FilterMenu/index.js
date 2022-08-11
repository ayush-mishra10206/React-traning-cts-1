import { useState } from "react";
import Product from "../../pages/productPage/Product";
import './index.css';

export default function FilterMenu() {

  const [defaultType, setDefaultType] = useState("All");

  return (
    <div>
      <div className="filterOuterDiv">
        <button className="buttonCategory" data-testid="allCategory" onClick={() => setDefaultType("All")}>All Categories</button>
        <button className="buttonCategory" data-testid="shirtCategory" onClick={() => setDefaultType("Shirt")}>Shirt</button>
        <button className="buttonCategory" data-testid="trousersCategory" onClick={() => setDefaultType("Trousers")}>Trousers</button>
        <button className="buttonCategory" data-testid="shoesCategory" onClick={() => setDefaultType("Shoes")}>
          Shoes</button>
      </div>
      <Product type={defaultType} />
    </div>
  );
}


