import React from "react";
import { format } from "date-fns";
import "./Order.css";

function Order({ order }) {
  return (
    <div className="order" data-items={order.basket.length}>
      <h3>Order ID: {order.id}</h3>
      <p>{format(new Date(order.created * 1000), "MMM dd yyyy, h:mma")}</p>

      <div className="order__items">
        {order.basket.map((item) => (
          <div key={item.id} className="order__item">
            <img src={item.image} alt={item.title} />
            <div>
              <h4>{item.title}</h4>
              <p>${item.price.toFixed(2)}</p>
              <p>⭐ {item.rating}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Order Total */}
      <h3 className="order__total">Total: ${order.amount / 100}</h3>
    </div>
  );
}

export default Order;
