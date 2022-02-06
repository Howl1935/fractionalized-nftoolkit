import {useState, useEffect} from "react";
import ethLogo from "../../assets/eth-logo.png";
import { useSelector } from 'react-redux';

function Ethbanner() {
  const { nfts } = useSelector(
		(state) => state.covalent
	);
  const [nftCount] = useState(nfts.length);


  let network = "ETHEREUM"
 
  return (
    <div className="mt-5 mb-5">
      <div class="flex flex-row space-x--1 ">
        <p class="text-5xl pb-3">{network}</p>
        <img
          className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] -mx-5 -my-1.5"
          src={ethLogo}
          alt="eth logo"
          width="100"
          height="100"
        />
      </div>
      <div class="flex flex-row space-x-1 -mt-2">
        <p class="text-lg">total NFTS:</p>
        <p class="text-lg text-[#FFC702] ">{nftCount}</p>
      </div>
    </div>
  );
}
export default Ethbanner;
