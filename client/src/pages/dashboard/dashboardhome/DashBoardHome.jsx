import DashBoardCard from "../../../components/DashBoardCard"
import DashboardTable from "./DashboardTable"

export const DashBoardHome = () => {
  return (
    <div className="bg-[#F8F9FC] w-full">
  <div className="px-6 mx-auto bg-[#F8F9FC]">
    <div className="flex items-center justify-between">
    <h1 className="text-[#35155D] text-lg leading-[34px] font-normal cursor-pointer">Dashboard Overview</h1>
    </div>
  </div>   
  <DashBoardCard/> 
  <DashboardTable/>
  </div>
  )
}
