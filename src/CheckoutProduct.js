import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
function CheckoutProduct({ id, image, title, price, rating,hideButton }) {
  // eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img
        alt="checkout-product"
        className="checkoutProduct__image"
        src={image}
      />
      <div className="checkoutProduct__info">
       {/* eslint-disable-next-line */}
        <p className="checkoutProduct__title"> {title}</p>
         {/* eslint-disable-next-line */}
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}> Remove from basket</button>
        )}{" "}
      </div>
    </div>
  );
}

export default CheckoutProduct;
