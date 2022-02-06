import React from "react";
import ethLogo from "../../assets/eth-logo.png";

function Ethbanner() {
  return (
    <div>
      <div class="flex flex-row space-x--1">
        <p class="text-5xl">ETHEREUM</p>
        <img
          class="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] -mx-5 -my-1.5"
          src={ethLogo}
          alt="eth logo"
          width="115"
          height="115"
        />
      </div>
      <div class="flex flex-row space-x-1 -mt-4">
        <p class="text-lg">total NFTS:</p>
        <p class="text-lg text-[#FFC702] ">51</p>
      </div>
    </div>
  );
}
export default Ethbanner;
