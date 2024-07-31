import React from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

const PopButton = ({
  selected,
  icon: Icon,
  onClick,
  text,
  identifier,
  color,
}) => {
  return (
    <Popover className="relative">
      <PopoverButton
        className={`p-2 rounded-full flex items-center justify-center border  text-white focus:outline-none ${
          selected === identifier ? `${color} border-2` : ""
        }`}
        onClick={() => onClick(identifier)}
      >
        <Icon className="h-6 w-6" />
      </PopoverButton>
      {/* <PopoverPanel className={`absolute z-10 w-48 p-2 bg-white/20 backdrop-blur-lg border text-white rounded-md shadow-lg left-24 transform -translate-x-36 md:right-auto md:translate-x-0 md:left-2`}>
        <p className="text-sm">{text}</p>
      </PopoverPanel> */}
      <PopoverPanel
  className={`absolute z-10 max-w-[90vw] bottom-11 md:-bottom-16 min-w-28 sm:w-48 p-2 bg-white/20 backdrop-blur-lg border text-white rounded-md shadow-lg left-1/2 transform -translate-x-1/3 sm:translate-x-0`}
>
  <p className="text-sm">{text}</p>
</PopoverPanel>

    </Popover>
  );
};

export default PopButton;
