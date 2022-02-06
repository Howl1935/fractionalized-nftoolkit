import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getNFTsETH,
  getNFTsPOLY,
  getNfts,
  getNftsPOLY,
} from "../features/covalent/covalentSlice";
import Spinner from "../components/layout/spinner/Spinner";
import { useNavigate } from "react-router-dom";
import { useMetaMask } from "metamask-react";
import Metamask from "../components/Metamask";
import Intropage from "../components/Intropage";
import { FaBinoculars } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaLinode } from "react-icons/fa";
import TechStack from "../components/TechStack";

function Home() {
  const { nfts, nftsPOLY, address, isLoading, isSuccess } = useSelector(
    (state) => state.covalent
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useMetaMask();

  useEffect(() => {
    if (isSuccess) {
      dispatch(getNfts());
      dispatch(getNftsPOLY());
    }
    if (address !== null) {
      dispatch(getNFTsETH(address));
      dispatch(getNFTsPOLY(address));
    }
    if (nfts !== null) {
      navigate("/gallery");
    }
  }, [isSuccess, address, nfts, nftsPOLY, navigate]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {/* {nfts !== null && navigate('/gallery')} */}

      {status === "unavailable" && <Metamask />}
      <div className="flex flex-col">
		  <div className="flex flex-row">
		  <div className="flex justify-around items-center w-full">
        <Intropage
          text={"Look at your NFT's"}
          icon={<FaBinoculars className="text-5xl md:text-5xl" />}
        />
        <Intropage
          text={"View Historical Pricing Info"}
          icon={<FaChartLine className="text-5xl md:text-5xl" />}
        />
        <Intropage
          text={"View Multiple EVM Compatible Chains"}
          icon={<FaLinode className="text-5xl md:text-5xl" />}
        />
		</div>
		
	</div>
	<TechStack />
	</div>
</>

  );
}

export default Home;
