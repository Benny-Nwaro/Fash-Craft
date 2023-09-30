import { useState } from "react";
import { designer } from "../designers";
import { NavLink } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";

export default function DesignersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleDesignerClick = (designerId) => {
    const index = designerId - 1;
    setCurrentIndex(index);
  };
  return (
    <>
      <div>
        <div className="flex flex-row place-content-center overflow-hidden mb-20 h-96 w-auto  max-w-md  my-24 mx-auto md:px-6 bg-white rounded-xl shadow-md  md:max-w-7xl  space-x-4 relative">
          {" "}
          {designer.map((item) => (
            <div
              key={item.id}
              onClick={() => handleDesignerClick(item.id)}
              onMouseOver={() => handleDesignerClick(item.id)}
            >
              <img
                className="transform hover:translate-x-full transition delay-300 h-full  object-cover ml-2 mt-5 w-64 rounded-lg  cursor-pointer  shadow-2xl absolute"
                src={item.image}
                alt="Designer Image"
              />
              <div className="p-4 w-64 ">
                <Typography color="blue-gray" className="mb-2 font-medium">
                  {designer[currentIndex].name}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="mb-4 font-normal"
                >
                  {designer[currentIndex].note}
                </Typography>

                <Button
                  size="sm"
                  variant="text"
                  className="flex items-center gap-1 capitalize border-white"
                >
                  <NavLink to="auth/register">Contact Designer</NavLink>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-3.5 w-3.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
