import { Link } from "react-router-dom";
import { hamburger } from "../assets/icons";
import { logo2 } from "../assets/images";
export const NavBar = () => {
  return (
    <section className="w-full py-2 shadow-md">
      <nav className="flex justify-between items-center max-container">
        <Link to="/">
          <div>
            <img src={logo2} alt="logo" className="w-[30%] object-cover" />
          </div>
        </Link>

        <ul className="flex-1 flex gap-x-10 font-palanquin text-[20px] font-medium max-lg:hidden">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
        <ul className="ml-[15px] flex gap-x-10 font-palanquin text-[20px] font-medium max-lg:hidden">
          <li className="cursor-pointer">Login</li>
          <li className="cursor-pointer">Register</li>
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={35} height={35} />
        </div>
      </nav>
    </section>
  );
};