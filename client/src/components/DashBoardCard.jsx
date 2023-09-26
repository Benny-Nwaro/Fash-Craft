// import React from "react";
import { FaBeer } from 'react-icons/fa';
import DashboardGraph from './DashboardGraph';

const DashBoardCard = () => {
  return (
    <div className="mx-5 bg-[#F8F9FC] p-10">
      {/* <div className='grid gap-4 mb-8 mx-8 md:grid-cols-4 xl:grid-cols-4'> */}

      <div className="flex flex-1 w-full h-full max-sm:w-full  ">
        <div className="w-1/4 h-48 bg-slate-500 rounded-md">
          <div className="m-10 p-5 justify-center items-center text-center">
            <div className=""><FaBeer fontSize={28} color='white' /> 
            </div>
            <div>Todays order</div>
            <div>$0.00</div>
          </div>
        </div>
        <div className="w-1/4 h-48 ml-4 bg-orange-400 rounded-md">
          <div className="m-10 p-5 justify-center items-center text-center">
            <div className=""></div>
            <div>Todays order</div>
            <div>$0.00</div>
          </div>
        </div>
        <div className="w-1/4 h-48 ml-4 bg-red-400 rounded-md">
          <div className="m-10 p-5 justify-center items-center text-center">
            <div className="">img</div>
            <div>Todays order</div>
            <div>$0.00</div>
          </div>
        </div>
        <div className="w-1/4 h-48 ml-4 bg-yellow-400 rounded-md">
          <div className="m-10 p-5 justify-center items-center text-center">
            <div className="">img</div>
            <div>Todays order</div>
            <div>$0.00</div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between w-full h-full max-sm:w-full my-10 ">
        <div className="w-1/4 h-28 mr-4 bg-white border border-solid border-gray-200 rounded-md flex items-center justify-center  text-center">
          <div className="w-1/4">img</div>
          <div>
            Total Order <br /> 343
          </div>
        </div>

        <div className="w-1/4 h-28 mr-4 bg-white border border-solid border-gray-200 rounded-md flex  justify-center items-center text-center">
          <div className="w-1/4">img</div>
          <div>
            Orders Pending <br /> 96
          </div>
        </div>

        <div className="w-1/4 h-28 mr-4 bg-white border border-solid border-gray-200 rounded-md flex  justify-center items-center text-center">
          <div className="w-1/4">img</div>
          <div>
            Orders Processing <br />18
          </div>
        </div>

        <div className="w-1/4 h-28 bg-white border border-solid border-gray-200 rounded-md flex  justify-center items-center text-center">
          <div className="w-1/4">img</div>
          <div>
            Orders Delivered
            <br /> 227
          </div>
        </div>
      </div>
      <DashboardGraph/>
    </div>
  );
};

export default DashBoardCard;
