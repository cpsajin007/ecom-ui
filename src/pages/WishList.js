import React, { useState } from "react";
import ProductCard from "./ProductCard.js";
import "./style.css";
import { selectFavorites } from "../redux/slicers/productSlice.js";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"; // Import Link

const WishList = () => {
  const favorites = useSelector(selectFavorites);
  const [imageLoading, setImageLoading] = useState(false);

  const totalPrice = favorites.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="fav-product-list-container">
      {favorites.length !== 0 && (
        <h2>WishList Products</h2>
      )}
      {favorites.length === 0 ? (
        <div className="no-list" style={{ display: "flex", justifyContent: "center", alignItems: 'center', height: "50vh" }}>
          <p>No WishList Products Found</p>
        </div>
      ) : (
        <div>
          <div className="product-list-container">
            {favorites.map((favoriteproduct, i) => (
              <ProductCard
                key={i}
                product={favoriteproduct}
                isFavorite={true}
                className="product-card"
                setImageLoading={setImageLoading}
                imageLoading={imageLoading}
              />
            ))}
          </div>
          <p>Total Price: ₹{totalPrice}</p>
          <Link to="/Payment">
           {/* Use Link component to navigate to payment details page */}
          <button onClick={() => handleProceedToBuy()}>Proceed to Buy</button>
          </Link>
        </div>
      )}
    </div>
  );
};

const handleProceedToBuy = () => {
  // Handle proceed to buy logic here
  console.log("Proceed to buy clicked");
};

export default WishList;
