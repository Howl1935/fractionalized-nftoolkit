import React from 'react';
import NftResult from '../components/nfts/NftResult'
import Ethbanner from '../components/nfts/ethbanner/Ethbanner';
import NftResultPOLY from '../components/nfts/NftResultPOLY'
import PolyBanner from '../components/nfts/polyBanner/PolyBanner';
import { useSelector } from 'react-redux';


function NftGallery() {
	const { nfts, nftsPOLY, address, isLoading, isSuccess } = useSelector(
		(state) => state.covalent
	);


	return (
		<div>	
			{nfts.length > 0 && (<><Ethbanner /><NftResult /></>) }
			{nftsPOLY.length > 0 && (<> <PolyBanner /><NftResultPOLY /> </>) }
			{nftsPOLY.length === 0 && nfts.length === 0 && <h1>No NFTS my friend</h1>}
		</div>
	);
	
}

export default NftGallery;
