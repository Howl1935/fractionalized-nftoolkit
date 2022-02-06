import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
	getNFTsETH,
	getNFTsPOLY,
	getNfts,
	getNftsPOLY,

} from '../features/covalent/covalentSlice';
import Spinner from '../components/layout/spinner/Spinner';
import Metamask from '../components/Metamask';
import NavigationButtons from '../components/navigation/NavigationButtons';

function Home() {
	const { nfts, nftsPOLY, userDataPOLY, isLoadingP, address, isLoading, isSuccess, isSuccessP, userData, connected } = useSelector(
		(state) => state.covalent
	);
	const dispatch = useDispatch();
	// const { status } = useMetaMask();
	useEffect(() => {
		if (address !== null ) {
			dispatch(getNFTsETH(address));
			dispatch(getNFTsPOLY(address));
		}

		if (isSuccess && userData !== null) {
			dispatch(getNfts());
		}
		if(isSuccessP && userDataPOLY !== null){
			dispatch(getNftsPOLY());
		}

		// if () {
			
		// }
	}, [ address, isSuccess, dispatch]);
//isSuccess,isSuccessP, address, nfts, nftsPOLY, navigate, userData,userDataPOLY, dispatch
	if (isLoading || isLoadingP) {
		return <Spinner />;
	}

	return (
		<>
			<div>
				
				<div className="container mx-auto">
					<div className="flex flex-row flex-wrap py-4">
						<aside className="w-full sm:w-1/3 md:w-1/4 px-2">
							<div className="sticky top-0 p-4 w-full">
								<ul className="flex flex-col overflow-hidden"></ul>
							</div>
						</aside>
						<main role="main" className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">

						{connected === 'unsuccessful' && <Metamask />}
						{connected === 'pending' && <h1>Please connect to MetaMask</h1>}
						{(nfts !== null || nftsPOLY !== null ) && <NavigationButtons />}
						Now in the homepage
						</main>
					</div>
				</div>
			</div>


		</>
	);
}

export default Home;
