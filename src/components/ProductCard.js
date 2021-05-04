import React from "react";
import primeIcon from "../assets/img/primeicon.png";
import "./ProductCard.css";

function ProductCard({
  name,
  thumb,
  color,
  price,
  rating,
  reviewCount,
  isPrime,
}) {
  function handleAddToCart() {
    alert("Product added to your cart!");
  }
  function star() {
    let star = "";
    for (let i = 0; i < rating; i++) {
      star += "⭐";
    }
    return star;
  }
  return (
    <div className="card">
      <div className="card__header">
        <img src={thumb} alt="name" className="card__img" />
      </div>
      <div className="card__body product">
        <h2 className="product__name">{name}</h2>
        <p className="product__color">{color}</p>
        <p className="product__price">&#x20b9;{price}</p>
        <div className="product__rating">
          {star()} ({reviewCount})
        </div>
        {isPrime && <img src={primeIcon} className="prime-icon" alt="Prime" />}
        <button className="btn-atc" onClick={handleAddToCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
