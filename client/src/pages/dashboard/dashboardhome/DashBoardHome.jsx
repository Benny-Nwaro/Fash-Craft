import DashBoardCard from "../../../components/DashBoardCard"
import { useEffect, useState } from "react";


export const DashBoardHome = () => {
  const [orders, setOrders] = useState([]);
  const [taskInputValue, setTaskInputValue] = useState("");

  useEffect(() => {
    async function fetchOrders() {
      try {
        // Make a fetch GET request to your API endpoint
        const response = await fetch("http://localhost:3000/api/v1/all-orders");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        // Handle the data by updating the state
        setOrders(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchOrders();
  }, []);

  // useEffect(() => {
  //   async function fetchOrders() {
  //     try {
  //       // Make a fetch GET request to your API endpoint
  //       const response = await fetch("http://localhost:3000/api/v1/all-orders");

  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }

  //       const data = await response.json();
  //       // Handle the data by updating the state
  //       setOrders(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }

  //   fetchOrders();
  // }, []);

  





  return (
    <div className="bg-[#F8F9FC] w-full">
  <div className="px-6 mx-auto bg-[#F8F9FC]">
    <div className="flex items-center justify-between">
    <h1 className="text-[#35155D] text-lg leading-[34px] font-normal cursor-pointer">Dashboard Overview</h1>
    </div>
  </div>   
  <DashBoardCard/> 
  </div>
  )
}
