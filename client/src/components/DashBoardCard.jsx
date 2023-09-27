import DashboardGraph from "./DashboardGraph";
import DashboardTable from "./DashBoardTable";

const DashBoardCard = ({ bgColor, label, value }) => {
  return (
  //   <div
  //   className={`flex flex-col sm:w-1/5 sm:min-w-1/5 h-48
  //   w-full rounded-[20px] shadow-3xl px-10 py-2 ${bgColor}`} 
  // >
  //   <div className="w-11 h-11 flex justify-center items-center bg-slate-50 rounded">
  //     <img src={"imgURL"} alt={"label"} width={24} height={24} />
  //   </div>
  //   <h3 className="font-palanquin text-3xl leading-normal font-bold">
  //     {label}
  //   </h3>
  //   <p className="mt-3 break-words font-montserrat text-lg leading-normal">
  //     {value}
  //   </p>
  // </div>
    <div className="mx-5 bg-[#F8F9FC] p-10">

      <div className="flex flex-1 w-full h-full max-sm:w-full  ">
        <div className="w-1/4 h-48 bg-slate-500 rounded-md">
          <div className="m-10 p-5 justify-center items-center text-center">

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
        <div className="w-1/4 h-28 mr-4 bg-white border border-solid border-gray-200 border-l-slate-500 border-l-8 rounded-md flex items-center justify-center  text-center">
          <div className="w-1/4">img</div>
          <div>
            Total Order <br /> 343
          </div>
        </div>

        <div className="w-1/4 h-28 mr-4 bg-white border border-solid border-gray-200 border-l-orange-400 border-l-8 rounded-md flex  justify-center items-center text-center">
          <div className="w-1/4">img</div>
          <div>
            Orders Pending <br /> 96
          </div>
        </div>

        <div className="w-1/4 h-28 mr-4 bg-white border border-solid border-gray-200 border-l-red-400 border-l-8 rounded-md flex  justify-center items-center text-center">
          <div className="w-1/4">img</div>
          <div>
            Orders Processing <br />
            18
          </div>
        </div>

        <div className="w-1/4 h-28 bg-white border border-solid border-gray-200 border-l-yellow-500 border-l-8 rounded-md flex  justify-center items-center text-center">
          <div className="w-1/4">img</div>
          <div>
            Orders Delivered
            <br /> 227
          </div>
        </div>
      </div>
      <DashboardGraph />
      <DashboardTable />
     </div>
  );
};

export default DashBoardCard;
