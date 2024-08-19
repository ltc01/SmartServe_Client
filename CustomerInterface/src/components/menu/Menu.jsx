import React, { useEffect, useContext } from "react";
import axios from "axios";
import MainContext from "../../context/MainContext";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import MenuItem from "./MenuItem";
import menu from '../../assets/images/menu.jpg'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'


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
      <Tap />
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


const categories = [
  {
    name: 'Recent',
    posts: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
  },
  {
    name: 'Popular',
    posts: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
  },
  {
    name: 'Trending',
    posts: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  },
]


const Tap = () => {
  return (
    <div className="flex h-screen w-full justify-center pt-24 px-4">
      <div className="w-full max-w-md">
        <TabGroup>
          <TabList className="flex gap-4">
            {categories.map(({ name }) => (
              <Tab
                key={name}
                className="rounded-full py-1 px-3 text-sm/6 font-semibold text-black focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                {name}
              </Tab>
            ))}
          </TabList>
          {/* <TabPanels className="mt-3">
            {categories.map(({ name, posts }) => (
              <TabPanel key={name} className="rounded-xl bg-black/50 p-3">
                <ul>
                  {posts.map((post) => (
                    <li key={post.id} className="relative rounded-md p-3 text-sm/6 transition hover:bg-white/5">
                      <a href="#" className="font-semibold text-black">
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                      <ul className="flex gap-2 text-white" aria-hidden="true">
                        <li>{post.date}</li>
                        <li aria-hidden="true">&middot;</li>
                        <li>{post.commentCount} comments</li>
                        <li aria-hidden="true">&middot;</li>
                        <li>{post.shareCount} shares</li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </TabPanels> */}
        </TabGroup>
      </div>
    </div>
  )
}









// // Convert binary data to base64 string
// const base64String = btoa(
//   new Uint8Array(item.img.data).reduce(
//     (data, byte) => data + String.fromCharCode(byte),
//     ""
//   )
// );
// const imageUrl = `data:image/jpeg;base64,${base64String}`; // Adjust MIME type as needed
