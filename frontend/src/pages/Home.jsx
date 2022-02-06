import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
	getNFTsETH,
	getNFTsPOLY,
	getNfts,
	getNftsPOLY,
} from '../features/covalent/covalentSlice';
import Spinner from '../components/layout/spinner/Spinner';
import { useNavigate } from 'react-router-dom';
import Metamask from '../components/Metamask';
import Intropage from '../components/Intropage';
import { FaBinoculars } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa';
import { FaLinode } from 'react-icons/fa';
import TechStack from '../components/TechStack';
import NavigationButtons from '../components/navigation/NavigationButtons';

function Home() {
	const {
		nfts,
		nftsPOLY,
		userDataPOLY,
		isLoadingP,
		address,
		isLoading,
		isSuccess,
		isSuccessP,
		userData,
		connected,
	} = useSelector((state) => state.covalent);
	const dispatch = useDispatch();

	useEffect(() => {
		if (address !== null) {
			dispatch(getNFTsETH(address));
			dispatch(getNFTsPOLY(address));
		}

		if (isSuccess && userData !== null) {
			dispatch(getNfts());
		}
		if (isSuccessP && userDataPOLY !== null) {
			dispatch(getNftsPOLY());
		}
	}, [address, isSuccess, dispatch]);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<div className="w-full  h-screen  ">
			{connected === 'unsuccessful' && <Metamask />}
			{connected === 'pending' && (
				<div className=" w-full pt-10">
					<h1>Please connect to MetaMask</h1>
				</div>
			)}
			{(nfts !== null || nftsPOLY !== null) && <NavigationButtons />}
		

			<div className="flex flex-col ">
				<div className="flex flex-row">
					<div className="flex justify-around items-center  w-full">
						<Intropage
							text={"Look at your NFT's"}
							icon={<FaBinoculars className="text-5xl md:text-5xl" />}
						/>
						<Intropage
							text={'View Historical Pricing Info'}
							icon={<FaChartLine className="text-5xl md:text-5xl" />}
						/>
						<Intropage
							text={'View Multiple EVM Compatible Chains'}
							icon={<FaLinode className="text-5xl md:text-5xl" />}
						/>
					</div>
				</div>
				<TechStack />
			</div>
		</div>
	);
}

export default Home;
