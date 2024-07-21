import React, { useContext, useState } from "react";
import MainContext from "../../context/MainContext";
import { FaSearch } from "react-icons/fa";


const SearchBar = () => {
  const { searchItem, setSearchItem } = useContext(MainContext);
  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearchItem(e.target.value);
  };

  return (
    <div className="relative mx-auto w-fit mb-5 md:mb-0">
      {/* <h2>Search Transaction:</h2> */}
      <form onSubmit={(e) => e.preventDefault()} className="">
        {/* <label className="font-semibold"> Search Item: </label> */}
        <input
          className="p-3 w-[99%] px-5 md:px-7 shadow-lg shadow-slate-400/60 rounded-full bg-slate-100 focus:outline focus:outline-[1.5px] focus:outline-emerald-600"
          type="text"
          name="findTransaction"
          id="findTransaction"
          size={60}
          placeholder="Search by menu name..."
          value={searchItem}
          onChange={handleSearch}
          required
        />
        <FaSearch className="absolute top-[30%] right-[5%] text-slate-400"/>
      </form>
    </div>
  );
};

export default SearchBar;