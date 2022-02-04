import PropTypes from 'prop-types';
function NftItem({ nft: { target_id, image, name } }) {
	return (
		<div className='bg-yellow-500 p-5 rounded-md'>
			<h1 className="text-black text-lg ">{name}</h1>
			<img className='rounded-md' src={image} alt='Profile' />
			{/* <h1 className="text-black">{contract_ticker_symbol}</h1> */}
		</div>
	);
}
export default NftItem;
