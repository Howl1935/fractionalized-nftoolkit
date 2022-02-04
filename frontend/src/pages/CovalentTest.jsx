import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNFTsETH, getNfts } from '../features/covalent/covalentSlice';
import Spinner from '../components/layout/spinner/Spinner';
import NftResult from '../components/nfts/NftResult';

function CovalentTest() {
	const { nfts, address, isLoading, isSuccess } = useSelector(
		(state) => state.covalent
	);

	const dispatch = useDispatch();

	// const onSubmit=(e)=>{
	//   e.preventDefault();
	//   dispatch(getNFTsETH('0xDec7778a7E416b0f4988Bb1Faff70cE9FAD6C233'))
	// }

	useEffect(() => {
		if (isSuccess) {
			dispatch(getNfts());
		}
		// if(nfts !== null){
		//   console.log('with great success')
		// }
		if (address !== null) {
			dispatch(getNFTsETH(address));
		}
	}, [isSuccess, address]);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<div>
			{/* <button onClick={onSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">CLICK ME</button> */}
			{nfts !== null && <NftResult />}
		</div>
	);
}

export default CovalentTest;
