// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { io } from 'socket.io-client';
// import printJS from 'print-js';
// import { FaPrint } from 'react-icons/fa'; // Importing the print icon from Font Awesome
// // import Login from '../../../CustomerInterface/src/components/Login';

// const Orders = () => {
//   const [orders, setOrders] = useState([]);
//   const socket = io('http://localhost:5000');

//   useEffect(() => {
//     // Fetch initial orders from the backend
//     axios.get('http://localhost:5000/api/orders')
//       .then(response => setOrders(response.data))
//       .catch(error => console.error(error));

//     // Listen for real-time updates
//     socket.on('orderUpdate', order => {
//       setOrders(prevOrders => prevOrders.map(o => o._id === order._id ? order : o));
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, [socket]);

//   const updateOrderStatus = (id, status="pending") => {
//     axios.put(`http://localhost:5000/api/orders/${id}`, { status })
//       .then(response => {
//         setOrders(prevOrders => prevOrders.map(order => order._id === id ? response.data : order));
//       })
//       .catch(error => console.error('Error updating order status:', error));
//   };

//   const handlePrint = (orderId) => {
//     const pdfUrl = `http://localhost:5000/api/orders/${orderId}/kot`; // Adjust the URL to your backend's API
//     printJS({
//       printable: pdfUrl,
//       type: 'pdf',
//       showModal: true
//     });
//   };

//   return (
//     <div>
//       <h2>Orders</h2>
//       <ul>
//         {orders.map(order => (
//           <li key={order._id}
//           className='bg-slate-100 p-2 mb-3'>
//             {order.items.map(item => item.name).join(', ')} - {order.status}
//             {order.status === 'approved' && (
//               <FaPrint
//                 style={{ cursor: 'pointer', marginLeft: '10px' }}
//                 onClick={() => handlePrint(order._id)}
//                 title="Print KOT"
//               />
//             )}
//             <button 
//             className='bg-red-600 p-2 text-white mx-2 rounded-full'
//             onClick={() => updateOrderStatus(order._id, 'pending')}>Pending</button>
//             <button 
//             className='bg-green-800 p-2 text-white mx-2 rounded-full'
//             onClick={() => updateOrderStatus(order._id, 'approved')}>Approved</button>
//             <button 
//             className='bg-slate-500 p-2 text-white mx-2 rounded-full'
//             onClick={() => updateOrderStatus(order._id, 'cancelled')}>Cancelled</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Orders;




// Added CSS

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';
import printJS from 'print-js';
import { FaPrint } from 'react-icons/fa';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const socket = io('http://localhost:5000');

  useEffect(() => {
    axios.get('http://localhost:5000/api/orders')
      .then(response => setOrders(response.data))
      .catch(error => console.error('Error fetching orders:', error));

    socket.on('orderUpdate', order => {
      setOrders(prevOrders => prevOrders.map(o => o._id === order._id ? order : o));
    });

    return () => {
      socket.disconnect();
    };
  }, [orders]);

  const updateOrderStatus = (id, status) => {
    axios.put(`http://localhost:5000/api/orders/${id}`, { status })
      .then(response => {
        setOrders(prevOrders => prevOrders.map(order => order._id === id ? response.data : order));
      })
      .catch(error => console.error('Error updating order status:', error));
  };

  const handlePrint = (orderId) => {
    const pdfUrl = `http://localhost:5000/api/orders/${orderId}/kot`;
    printJS({
      printable: pdfUrl,
      type: 'pdf',
      showModal: true
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      <ul className="space-y-2 flex flex-col-reverse">
        {orders.map(order => (
          <li key={order._id} className="border p-2 rounded shadow flex justify-between items-center">
            <div>
              <p><strong>Items:</strong> {order.items.map(item => item.name).join(', ')}</p>
              <p><strong>Status:</strong> {order.status}</p>
            </div>
            {order.status === 'approved' && (
              <FaPrint
                className="text-blue-500 cursor-pointer ml-4"
                onClick={() => handlePrint(order._id)}
                title="Print KOT"
              />
            )}
            <div className="flex space-x-2">
              <button
                className="bg-yellow-500 text-white px-3 py-1 rounded"
                onClick={() => updateOrderStatus(order._id, 'pending')}
              >
                Pending
              </button>
              <button
                className="bg-green-500 text-white px-3 py-1 rounded"
                onClick={() => updateOrderStatus(order._id, 'approved')}
              >
                Approved
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => updateOrderStatus(order._id, 'cancelled')}
              >
                Cancelled
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
