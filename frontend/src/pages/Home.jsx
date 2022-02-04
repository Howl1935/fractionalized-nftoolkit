import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getNFTsETH, getNfts } from '../features/covalent/covalentSlice';
import Spinner from '../components/layout/spinner/Spinner';
import { useNavigate } from 'react-router-dom';

function Home() {
	const { nfts, address, isLoading, isSuccess } = useSelector(
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
	}, [isSuccess, address]);

	if (isLoading) {
		return <Spinner />;
	}

	return <>{nfts !== null && navigate('/gallery')}<h1>HOME PAGE</h1></>;
}

export default Home;
