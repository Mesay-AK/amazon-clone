import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./../components/CheckoutProduct";
import { useStateValue } from "./../components/StateProvider"; 

function Checkout() {
  // Access the basket from global state
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        {/* Checkout advertisement banner */}
        <img
          className="checkout__ad"
          alt="checkout-ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        <h3>Hello, {basket.length ? "User" : "Guest"}</h3>
        <h2 className="checkout__title">Your Shopping Basket</h2>
        
        {/* Display each product in the basket */}
        {basket.length > 0 ? (
          basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))
        ) : (
          <p>Your shopping basket is empty</p>
        )}
      </div>

      <div className="checkout__right">
        {/* Subtotal component */}
        
      </div>
    </div>
  );
}

export default Checkout;
