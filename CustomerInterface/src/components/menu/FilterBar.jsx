import React, { useContext } from "react";
import MainContext from "../../context/MainContext";
import { TbAdjustmentsHorizontal } from "react-icons/tb";

const FilterBar = () => {
  const { filterStatus, setFilterStatus } = useContext(MainContext);

  const handleFilter = (e) => {
    setFilterStatus(e.target.value);
  };
  const options = [
    "All time favourites",
    "Breakfast",
    "Dinner",
    "Drinks",
    "Lunch",
  ];
  return (
    <button className="flex items-center w-fit border shadow-lg border-slate-400 rounded-xl text-slate-600 py-1 px-2">
      <TbAdjustmentsHorizontal className=" text-slate-600" />
      <select
        name="trans"
        id="trans"
        value={filterStatus}
        onChange={handleFilter}
        className="outline-none "
      >
        <option value="" disabled hidden>
          Filter by
        </option>
        <option value="">All</option>
        {options.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </button>
  );
};

export default FilterBar;
