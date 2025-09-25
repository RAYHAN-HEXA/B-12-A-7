import React from 'react';

const Countbox = () => {
  return (
    <div className="grid grid-cols-2 gap-7 container mx-auto p-8  min-h-[400px]">
      <div className="rounded-md p-7 text-white h-[250px] bg-[#422AD5] flex flex-col items-center justify-center">
        <h2 className="font-bold text-[35px]">Submitted</h2>
        <p className="font-semibold text-[26px]">12</p>
      </div>

      <div className="rounded-md p-7 text-white h-[250px] bg-[#422AD5] flex flex-col items-center justify-center">
        <h2 className="font-bold text-[35px]">Resolved</h2>
        <p className="font-semibold text-[26px]">5</p>
      </div>
    </div>
  );
};

export default Countbox;
