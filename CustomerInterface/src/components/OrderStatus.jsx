import React, { useContext, useEffect} from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';
import MainContext from '../context/MainContext';

const OrderStatus = () => {
  const {userId, orders, setOrders} = useContext(MainContext)
  

  // const socket = io('http://localhost:5000');

  useEffect(() => {
    // axios.get(`http://localhost:5000/api/orders/user/${userId}`)
    //   .then(response => setOrders(response.data))
    //   .catch(error => console.error('Error fetching orders:', error));

    // socket.on('orderUpdate', updatedOrder => {
    //   setOrders(prevOrders => prevOrders.map(order => order._id === updatedOrder._id ? updatedOrder : order));
    // });

    // return () => {
    //   socket.disconnect();
    // };
  }, [userId, socket]);

  const handlePayment = (orderId) => {
    // axios.put(`http://localhost:5000/api/orders/${orderId}/pay`)
    //   .then(response => {
    //     setOrders(prevOrders => prevOrders.map(order => order._id === orderId ? response.data : order));
    //     alert('Payment successful!');
    //   })
    //   .catch(error => console.error('Error processing payment:', error));
    alert('Payment successful')
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Order Status</h2>
      <ul className="space-y-2">
        {orders.map(order => (
          <li key={order._id} className="border p-2 rounded shadow">
            <div>
              <p><strong>Items:</strong> {order.items.map(item => item.name).join(', ')}</p>
              <p><strong>Status:</strong> {order.status}</p>
              <p><strong>Total:</strong> ${order.totalAmount.toFixed(2)}</p>
            </div>
            {order.status === 'approved' && !order.paid && (
              <button
                className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
                onClick={() => handlePayment(order._id)}
              >
                Proceed to Payment
              </button>
            )}
            {order.paid && <span className="text-green-600 font-bold"> - Paid</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderStatus;
