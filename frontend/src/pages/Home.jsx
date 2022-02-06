import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getNFTsETH, getNFTsPOLY, getNfts, getNftsPOLY } from '../features/covalent/covalentSlice';
import Spinner from '../components/layout/spinner/Spinner';
import { useNavigate } from 'react-router-dom';
import { useMetaMask } from 'metamask-react';
import Metamask from '../components/Metamask';
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
			dispatch(getNftsPOLY())
		}
		if (address !== null) {
			dispatch(getNFTsETH(address));
			dispatch(getNFTsPOLY(address));
		}
		if(nfts !== null){
			navigate('/gallery')
		}
	}, [isSuccess, address, nfts, nftsPOLY, navigate]);

	if (isLoading) {
		return <Spinner />;
	}


	return <>
	{status === 'unavailable' && <Metamask />}
	</>;
}

export default Home;
