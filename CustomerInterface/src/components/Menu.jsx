import React, { useState, useEffect } from "react";
import axios from "axios";

const MenuItem = ({ item, addToCart }) => {
  // Convert binary data to base64 string
  const base64String = btoa(
    new Uint8Array(item.img.data).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );
  const imageUrl = `data:image/jpeg;base64,${base64String}`; // Adjust MIME type as needed

  return (
    <div >
      <img src={imageUrl} alt={item.name} className=""/>
      <h3 className="text-2xl font-semibold">{item.name}</h3>
      <p className="text-lg">
        <span className="font-semibold pr-2">Price:</span>${item.price}
      </p>
      <p className="text-lg">
        <span className="font-semibold pr-2">Rating:</span> {item.rating}
      </p>
      <button 
      onClick={() => addToCart(item)} 
      className="font-bold hover:bg-green-800 hover:text-white bg-green-100 text-green-800 mt-5 mx-auto px-10 py-5 rounded-full">
        Add to Cart
      </button>
    </div>
  );
};

const Menu = ({ addToCart }) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Fetch menu items from the backend
    axios
      .get("http://localhost:5000/api/menu")
      .then((response) => setMenuItems(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="bg-slate-100 py-20">
      <h2 className="text-3xl text-center font-bold">Menu</h2>
      <div className="flex flex-wrap justify-center gap-1">
        {menuItems.map((item) => (
          <div key={item._id} className="bg-black/20 w-[20%] h-fit m-2 mx-auto text-center p-7 rounded-t-3xl">
            <MenuItem item={item} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
