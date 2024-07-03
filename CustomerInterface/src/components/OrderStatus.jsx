import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';

const OrderStatus = ({ userId }) => {
  const [orders, setOrders] = useState([]);
  const socket = io('http://localhost:5000');

  useEffect(() => {
    // Fetch user orders
    axios.get(`http://localhost:5000/api/orders/user/${userId}`)
      .then(response => setOrders(response.data))
      .catch(error => console.error('Error fetching orders:', error));

    // Listen for order status updates
    socket.on('orderUpdate', updatedOrder => {
      setOrders(prevOrders => prevOrders.map(order => order._id === updatedOrder._id ? updatedOrder : order));
    });

    return () => {
      socket.disconnect();
    };
  }, [userId]);

  const handlePayment = (orderId) => {
    // Call the API to mark the order as paid
    axios.put(`http://localhost:5000/api/orders/${orderId}/pay`)
      .then(response => {
        setOrders(prevOrders => prevOrders.map(order => order._id === orderId ? response.data : order));
        alert('Payment successful!');
      })
      .catch(error => console.error('Error processing payment:', error));
  };

  return (
    <div>
      <h2>Order Status</h2>
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            <div>
              {order.items.map(item => item.name).join(', ')} - {order.status} - Total: ${order.totalAmount.toFixed(2)}
            </div>
            {order.status === 'approved' && !order.paid && (
              <button onClick={() => handlePayment(order._id)}>Proceed to Payment</button>
            )}
            {order.paid && <span> - Paid</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderStatus;
