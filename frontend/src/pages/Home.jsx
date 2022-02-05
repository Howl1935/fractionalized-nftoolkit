import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getNFTsETH, getNfts } from '../features/covalent/covalentSlice';
import Spinner from '../components/layout/spinner/Spinner';
import { useNavigate } from 'react-router-dom';

function Home() {
	const { nfts, address, isLoading, isSuccess, metamaskNotConnected } = useSelector(
		(state) => state.covalent
	);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (isSuccess) {
			dispatch(getNfts());
		}
		if (address !== null) {
			dispatch(getNFTsETH(address));
		}
		if(metamaskNotConnected){
			navigate('/metamask');
		}
	}, [isSuccess, address,metamaskNotConnected]);

	if (isLoading) {
		return <Spinner />;
	}


	return <>{nfts !== null && navigate('/gallery')}</>;
}

export default Home;
