import React, { useEffect, useContext } from "react";
import axios from "axios";
import MainContext from "../../context/MainContext";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import MenuItem from "./MenuItem";
import menu from '../../assets/images/menu.jpg'

const Menu = () => {
  // // Fetch menu items from the backend
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/menu")
  //     .then((response) => setMenuItems(response.data))
  //     .catch((error) => console.error(error));
  // }, []);

  const { cart, setCart, menuItems, filterStatus, searchItem, setMenuItems } =
    useContext(MainContext);
  
  const isItemInCart = (item) => {
    
    return cart?.some(
      (cartItem) => cartItem.name === item.name && cartItem.price === item.price
    );
  };

  // Function to add items to cart
  const addToCart = (item) => { 
      setCart((prevCart) => {
        const itemExists = prevCart.some((cartItem) => cartItem.name === item.name);
    
        // If the item is already in the cart, don't add it again
        if (itemExists) {
          return prevCart;
        }
    
        // Item is not in the cart, add it
        const updatedCart = [...prevCart, item];
    
        // Save updated cart to localStorage
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    
        return updatedCart;
      });
      
  };
// console.log(menuItems)
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
    <div
    className='pb-16 md:px-4'>
      <h2 className="text-2xl text-center font-bold pt-6 py-2">
        Discover Delicious Menus🍝
      </h2>
      <div className="mt-6 mb-7 px-10">
        <SearchBar />
        <FilterBar />
      </div>
      
        <MenuItem
          // handleUpdateStatus={handleUpdateStatus}
          updatedMenuList={updatedMenuList}
          isItemInCart={isItemInCart}
          addToCart={addToCart}
        />
      
    </div>
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
