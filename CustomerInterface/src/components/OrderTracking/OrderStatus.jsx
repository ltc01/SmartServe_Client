import React, { useContext, useEffect } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import MainContext from "../../context/MainContext";
import { useNavigate } from "react-router-dom";
import OrderedItems from "./OrderedItems";

const OrderStatus = () => {
  const navigate = useNavigate();
  const { userId, orders, setOrders } = useContext(MainContext);

  // uncomment to use
  const socket = io('http://localhost:5000');

  // useEffect(() => {
  //   async function fetchData() {
  //     await axios.get(`http://localhost:5000/api/orders/user/${userId}`)
  //     .then(response => {
  //       setOrders(response.data);
  //       localStorage.setItem("Orders", JSON.stringify(response.data));

  //     })
  //     .catch(error => console.error('Error fetching orders:', error));

  //   }
  //  fetchData();
  //   socket.on('orderUpdate', updatedOrder => {
  //     setOrders(prevOrders => prevOrders.map(order => order._id === updatedOrder._id ? updatedOrder : order));
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, [orders, socket]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/orders/`);
        setOrders(response.data);
        localStorage.setItem("Orders", JSON.stringify(response.data));
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };
  
    fetchData();
  
    // const handleOrderUpdate = updatedOrder => {
    //   setOrders(prevOrders => prevOrders.map(order => order._id === updatedOrder._id ? updatedOrder : order));
    // };
    const handleOrderUpdate = updatedOrder => {
      setOrders(prevOrders => {
        const orderIndex = prevOrders.findIndex(order => order._id === updatedOrder._id);
  
        if (orderIndex !== -1 && prevOrders[orderIndex].status !== updatedOrder.status) {
          alert("Order updated");
        }
  
        return prevOrders.map(order => order._id === updatedOrder._id ? updatedOrder : order);
      });
    };
    socket.on('orderUpdate', handleOrderUpdate);
  
    return () => {
      socket.off('orderUpdate', handleOrderUpdate);
    };
  }, []);
  
  const handlePayment = (orderId) => {
    // axios.put(`http://localhost:5000/api/orders/${orderId}/pay`)
    //   .then(response => {
    //     setOrders(prevOrders => prevOrders.map(order => order._id === orderId ? response.data : order));
    //     alert('Payment successful!');
    //   })
    //   .catch(error => console.error('Error processing payment:', error));
    alert("Payment successful");
  };

  const handlePaymenT = async (product) => {
    const response = await fetch(`${apiUrl}/api/payment/order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: product.price * 100, // Razorpay accepts amount in paise
        currency: 'INR',
        user_id: 'user1234', // Replace with actual user ID
        product_id: product._id,
        quantity: 1,
        paymentMethod: 'Razorpay',
        shippingAddress: 'Test Address', // Replace with actual shipping address
      }),
    });

    const data = await response.json();

    if (data.order_id) {
      const options = {
        key: razorpayID,
        amount: data.amount,
        currency: data.currency,
        name: "Divueens",
        description: "Test Transaction",
        order_id: data.order_id,
        handler: async function (response) {
          const result = await fetch(`${apiUrl}/api/payment/verify`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const resultData = await result.json();
          console.log(resultData,'resultData')
          alert(resultData.message);
        },
        prefill: {
          name: "Test User",
          email: "test.user@example.com",
          contact: "8447890137",
        },
        notes: {
          address: "Test Address",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    }
  };
  return (
    <div className="container my-9 px-4 lg:px-16 mx-auto">
      <h2 className="text-2xl font-bold mb-3">Order Status</h2>
      <ul className="flex-col-reverse flex justify-center items-start">
        {orders.map((order, index) => (
          <li
            key={order._id}
            className="border overflow-hidden my-3 w-[100%] rounded-xl shadow-sm shadow-slate-400"
          >
            <div className="flex flex-col sm:flex-row">
              {/* <p><strong>Items:</strong> {order.items.map(item => item.name).join(', ')} {order.quantity}</p> */}
              <div className="flex-col p-4 text-nowrap flex justify-start md:space-y-1">
                <h5 className="text-xs mb-2 md:mb-0 md:text-sm text-slate-500">
                  Order ID: #SS{index}
                </h5>
                <p>
                  <strong>Items:</strong> {order.items.length}
                </p>
                <p>
                  <strong>Status:</strong> {(order.status)}
                </p>
                <p>
                  <strong>Paid:</strong> {order.paid === false ? "No" : "Yes" }
                </p>
                <p>
                  <strong>Amount:</strong> ₹{order.totalAmount.toFixed(2)}
                </p>

                {order.status === "approved" && order.paid === false && (
                  <div className="mt-3">
                    <button
                      className="text-sm bg-teal-600 hover:bg-teal-700 mt-2 text-white px-4 py-2 rounded-full"
                      onClick={() => handlePayment(order._id)}
                    >
                      Make Payment
                    </button>
                  </div>
                )}
                {order.paid && (
                  <span className="text-green-600 font-bold"> - Paid</span>
                )}
              </div>
              {/* {console.log(order)} */}
                <OrderedItems order={order} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderStatus;

 {/* <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
      <div className="flex gap-3 md:gap-6 justify-center">
        {order.items.map((product, index) => (
          <SwiperSlide>
            <div key={index} className="w-fit pb-3">
              <div className="h-32 w-32 md:h-40 md:w-40 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="">
                <h3 className="text-base font-medium text-gray-900">
                  {product.name}
                </h3>
                <div className="flex px-1 pr-3 justify-between items-center">
                  <p className="font-medium text-red-700">
                    ₹{product.quantity * product.price}/-
                  </p>
                  <p className="text-gray-500 text-xs">
                    {product.quantity}x ₹{product.price}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </div>
      </Swiper> */}