import PropTypes from 'prop-types';
function NftItem({ nft: { contract_name, contract_ticker_symbol } }) {
	return (
		<div>
			<h1 className="text-white">{contract_name}</h1>
			<h1 className="text-white">{contract_ticker_symbol}</h1>
		</div>
	);
}

export default NftItem;
