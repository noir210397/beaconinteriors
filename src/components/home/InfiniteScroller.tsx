import React from "react";

const InfiniteScroller = () => {
  return (
    <div className=" overflow-hidden ">
      <div className="flex w-fit active gap-[40px] ">
        <div className="uppercase text-8xl px-10 text-center  ">interiors</div>
        <div className="uppercase text-8xl px-10 text-center  ">interiors</div>
        <div className="uppercase text-8xl px-10 text-center   ">interiors</div>
        <div className="uppercase text-8xl px-10 text-center  ">interiors</div>
      </div>
    </div>
  );
};

export default InfiniteScroller;
