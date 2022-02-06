//import { Link } from 'react-router-dom';
import flourish from "../assets/flourish2.png";
import ConnectWallet from "../ConnectWallet";

import PropTypes from "prop-types";
function Navbar({ title }) {
  return (
    <nav className="flex items-center border roundedjustify-between flex-wrap 
    bg-gradient-to-r from-[#A7DA4E] via-[#6DBD86] to-[#A7DA4E] p-6
    shadow-[0_4px_10px_10px_rgba(0,0,0,0.1)]">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <img src={flourish} alt="flourish logo" width="149" height="144" />
        <span className="font-semibold text-5xl tracking-tight text-[#FFC702]">FLOURISH</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          {/* <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-500 hover:text-white mr-4"
          >
            Max
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-500 hover:text-white mr-4"
          >
            Matt
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-500 hover:text-white"
          >
            Travis
          </a> */}
        </div>
        <div>
          <a className="inline-block text-sm px-4 py-2 leading-none bg-lime-500 border rounded text-black hover:border-black hover:text-black hover:bg-lime-500 mt-4 lg:mt-0">
            <ConnectWallet />
          </a>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Eth-e-Real",
};

Navbar.propTypes = {
  title: PropTypes.string,
};
export default Navbar;
