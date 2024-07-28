import React from 'react'
import BeatLoader from "react-spinners/BeatLoader";

const Loading = () => {
    return (
      <div className="flex z-50 items-center justify-center top-0 left-0 right-0 bottom-0 absolute bg-black/70 backdrop-blur-lg ">
        <div className="flex flex-col items-center justify-center space-x-1">
          <h2 className=" text-white text-2xl pb-1 font-medium">Please wait</h2>
          <BeatLoader color="white" size={10} />
        </div>
        {/* <img src={rotate} alt="" className="w-10 h-10" /> */}
      </div>
    );
  };

export default Loading