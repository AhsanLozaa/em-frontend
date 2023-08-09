import React from "react";
import "./styles.scss";

const ProductCard = ({ key, product }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top consistent-image"
        src={
          product.image !== undefined
            ? product.image
            : "https://picsum.photos/id/42/3456/2304"
        }
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.category}</p>
        <p className="card-text">{product.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Price: {product.price}</li>
        {/* <li className="list-group-item">Dapibus ac facilisis in</li> */}
        {/* <li className="list-group-item">Vestibulum at eros</li> */}
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
