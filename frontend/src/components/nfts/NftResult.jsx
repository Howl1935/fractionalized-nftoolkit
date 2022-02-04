import {useSelector} from 'react-redux';
import Spinner from '../layout/spinner/Spinner';
import NftItem from './NftItem';

function NftResult() {
    const {nfts, isLoading, isSuccess} = useSelector(state => state.covalent);

	if (!isLoading && isSuccess ) {
		return (
			<div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md: grid-cols-2">
				{nfts.map((nft) => (
					<NftItem key={nft.id} nft={nft} />
				))}
			</div>
		);
	} else {
		return <Spinner />;
	}
}

export default NftResult;
