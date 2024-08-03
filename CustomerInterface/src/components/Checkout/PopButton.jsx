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
    <div className="relative group">
      <div
        className={`p-2 mb-2 rounded-full flex items-center justify-center border  text-white focus:outline-none ${
          selected === identifier ? `${color} border-2` : ""
        }`}
        onClick={() => onClick(identifier)}
      >
        <Icon className="h-6 w-6" />
      </div>
      <div
        className={`absolute hidden group-hover:block z-50 max-w-[90vw] bottom-11 md:-bottom-16 min-w-28 sm:w-48 p-2 bg-white/30 border backdrop-blur-lg text-white rounded-md shadow-lg left-1/2 transform -translate-x-1/3 sm:translate-x-0`}
      >
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};

export default PopButton;

// fixed hover on icons-----------------------------------------------

// import React, { useState } from "react";
// import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

// const PopButton = ({
//   selected,
//   icon: Icon,
//   onClick,
//   text,
//   identifier,
//   color,
// }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const isMobile = window.innerWidth <= 768; // Adjust based on your breakpoint

//   return (
//     <Popover className="relative">
//       {({ open }) => (
//         <>
//           <PopoverButton
//             className={`p-2 rounded-full flex items-center justify-center border text-white focus:outline-none ${
//               selected === identifier ? `${color} border-2` : ""
//             }`}
//             onClick={() => {
//               if (isMobile) {
//                 // Toggle hover state on mobile click
//                 setIsHovered(!isHovered);
//                 onClick(identifier);
//               }
//             }}
//             onMouseEnter={() => {
//               if (!isMobile) {
//                 // Only handle hover on non-mobile devices
//                 setIsHovered(true);
//               }
//             }}
//             onMouseLeave={() => {
//               if (!isMobile) {
//                 // Only handle hover on non-mobile devices
//                 setIsHovered(false);
//               }
//             }}
//           >
//             <Icon className="h-6 w-6" />
//           </PopoverButton>
//           {(open || isHovered) && (
//             <PopoverPanel
//               className={`absolute z-10 max-w-[90vw] bottom-11 md:-bottom-16 min-w-28 sm:w-48 p-2 bg-white/20 backdrop-blur-lg border text-white rounded-md shadow-lg left-1/2 transform -translate-x-1/3 sm:translate-x-0`}
//             >
//               <p className="text-sm">{text}</p>
//             </PopoverPanel>
//           )}
//         </>
//       )}
//     </Popover>
//   );
// };

// export default PopButton;
