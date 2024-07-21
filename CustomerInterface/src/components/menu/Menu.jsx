import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import MainContext from "../../context/MainContext";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import MenuItem from "./MenuItem";

const Menu = () => {
  // Fetch menu items from the backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/menu")
      .then((response) => setMenuItems(response.data))
      .catch((error) => console.error(error));
  }, []);

  const { cart, setCart, menuItems, filterStatus, searchItem, setMenuItems } =
    useContext(MainContext);

  const isItemInCart = (item) => {
    return cart.some(
      (cartItem) => cartItem.name === item.name && cartItem.price === item.price
    );
  };

  // Function to add items to cart
  const addToCart = (item) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex(
        (cartItem) => cartItem.name === item.name
      );

      if (itemIndex !== -1) {
        // Item is already in the cart, remove it
        return prevCart.filter((_, index) => index !== itemIndex);
      } else {
        // Item is not in the cart, add it
        return [...prevCart, item];
      }
    });
  };

  const updatedMenuList = menuItems.filter((item) => {
    const searchMenu = searchItem
      ? item.name.toLowerCase().includes(searchItem.toLowerCase())
      : true;
    const filteredMenu = filterStatus ? item.rating === filterStatus : true;

    return searchMenu && filteredMenu;
  });

  // const handleUpdateStatus = (id, status) => {
  //   setMenuItems((prevList) =>
  //     prevList.map((item) => (item.id === id ? { ...item, status } : item))
  //   );
  // };

  // Function to proceed to payment
  const proceedToPayment = () => {};

  return (
    <>
      <h2 className="text-2xl text-center font-bold mt-6 py-2">
        Discover Delicious Menus🍝
      </h2>
      <div className="mt-6 mb-7 px-10">
        <SearchBar />
        <FilterBar />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-1">
        <MenuItem
          // handleUpdateStatus={handleUpdateStatus}
          updatedMenuList={updatedMenuList}
          isItemInCart={isItemInCart}
          addToCart={addToCart}
        />
      </div>
    </>
  );
};

export default Menu;

// // Convert binary data to base64 string
// const base64String = btoa(
//   new Uint8Array(item.img.data).reduce(
//     (data, byte) => data + String.fromCharCode(byte),
//     ""
//   )
// );
// const imageUrl = `data:image/jpeg;base64,${base64String}`; // Adjust MIME type as needed
