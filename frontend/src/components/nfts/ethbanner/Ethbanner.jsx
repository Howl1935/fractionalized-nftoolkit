import React from "react";
import ethLogo from "../../assets/eth-logo.png";

function Ethbanner() {
  return (
    <div className="space-y-1">
      <div className="flex flex-row space-x--1 ">
        <p className="text-5xl">ETHEREUM</p>
        <img
          className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] -mx-5 -my-1.5"
          src={ethLogo}
          alt="eth logo"
          width="100"
          height="100"
        />
      </div>
      <div className="flex flex-row space-x-1 mt-4">
        <p className="text-lg">Total NFTS:</p>
        <p className="text-lg text-[#FFC702] ">51</p>
      </div>
    </div>
  );
}
export default Ethbanner;
