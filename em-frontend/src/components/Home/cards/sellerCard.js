import React from "react";

const SellerCard = ({ key, seller }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={
          seller.profilePicture !== undefined
            ? seller.profilePicture
            : "https://picsum.photos/id/42/3456/2304"
        }
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{seller.businessName}</h5>
        <p className="card-text">{seller.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Rating: {seller.sellerRating}</li>
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

export default SellerCard;
