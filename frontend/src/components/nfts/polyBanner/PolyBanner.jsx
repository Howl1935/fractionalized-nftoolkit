import {useState, useEffect} from "react";
import logo from "../../assets/polygon-matic-logo.png";
import { useSelector } from 'react-redux';

function PolyBanner() {
  const { nftsPOLY } = useSelector(
		(state) => state.covalent
	);
  const [nftCount] = useState(nftsPOLY.length);


  let network = "POLYGON"
 
  return (
    <div className="mt-5 mb-5 p-3 bg-[#ffffe0] drop-shadow-[0_4px_4px_rgba(0,0,0,0.10)]">
      <div class="flex flex-row space-x--1 ">
        <p class="text-5xl pb-3 pr-10">{network}</p>
        <img
          className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] -mx-5 -my-1.5"
          src={logo}
          alt="polygon logo"
          width="50"
          height="35"
        />
      </div>
      <div class="flex flex-row space-x-1 -mt-2">
        <p class="text-lg">total NFTS:</p>
        <p class="text-lg text-[#FFC702] ">{nftCount}</p>
      </div>
    </div>
  );
}
export default PolyBanner;
