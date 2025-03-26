import React, { useEffect, useState } from "react";
import "./Orders.css";
import ordersData from "../data/orders.json";
import Order from "../components/Order";


function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(ordersData);
  }, []);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
