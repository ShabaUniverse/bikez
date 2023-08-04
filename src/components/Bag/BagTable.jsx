import React from "react";

const BagTable = () => {
  return (
    <div className="bag-explanation flex bg-yellow-400">
      <div className="w-3/6 border-l font-semibold border-stone-600 p-1 text-center">
        <p>item</p>
      </div>
      <div className="w-1/5 border-l font-semibold border-stone-600 p-1 text-center">
        <p>size</p>
      </div>
      <div className="w-2/5 border-l font-semibold border-stone-600 p-1 text-center">
        <p>quantity</p>
      </div>
      <div className="w-1/5 border-l font-semibold border-stone-600 p-1 text-center">
        <p>price</p>
      </div>
      <div className="w-1/5 border-l border-r font-semibold border-stone-600 p-1 text-center">
        <p>remove</p>
      </div>
    </div>
  );
};

export default BagTable;
