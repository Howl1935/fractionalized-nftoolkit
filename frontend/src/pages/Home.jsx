import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getNFTsETH, getNfts } from '../features/covalent/covalentSlice';
import Spinner from '../components/layout/spinner/Spinner';
import { useNavigate } from 'react-router-dom';
import { useMetaMask } from 'metamask-react';
import Metamask from '../components/Metamask';
function Home() {
	const { nfts, address, isLoading, isSuccess } = useSelector(
		(state) => state.covalent
	);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { status } = useMetaMask();

	useEffect(() => {
		if (isSuccess) {
			dispatch(getNfts());
		}
		if (address !== null) {
			dispatch(getNFTsETH(address));
		}
		if(nfts !== null){
			navigate('/gallery')
		}
	}, [isSuccess, address, nfts]);

	if (isLoading) {
		return <Spinner />;
	}


	return <>
	{/* {nfts !== null && navigate('/gallery')} */}
	{status === 'unavailable' && <Metamask />}
	</>;
}

export default Home;
