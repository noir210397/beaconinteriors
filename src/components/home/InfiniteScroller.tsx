import React from "react";

const InfiniteScroller = () => {
  return (
    <div className=" overflow-hidden ">
      <div className="flex w-[200vw] active font-extrabold ">
        <div className="uppercase w-[100vw]   text-[50px] leading-none md:text-[60px] lg:text-[80px] text-center flex-shrink-0  ">
          interiors
        </div>
        <div className="uppercase w-[100vw] text-[50px] leading-none md:text-[60px] lg:text-[80px] text-center flex-shrink-0  ">
          interiors
        </div>
        {/* <div className="uppercase text-8xl px-10 text-center   ">interiors</div>
        <div className="uppercase text-8xl px-10 text-center  ">interiors</div> */}
      </div>
    </div>
  );
};

export default InfiniteScroller;
