import React from "react";

type Product = {
  id: number;
  title: string;
  rating: number;
  price: number;
  image_url: string;
};

type ProductProps = {
  product: Product;
};

function ProductCard({ product }: ProductProps) {
  if (!product) return null;

  const { title, rating, price, image_url } = product;

  return (
    <>
      <div>
        <img className="rounded-3xl" src={image_url} alt="product img" />
        <h2 className="font-bold">{title}</h2>
        <span className="font-thin">{rating}</span>
        <h2 className="font-bold">{price}</h2>
      </div>
    </>
  );
}

export default ProductCard;
