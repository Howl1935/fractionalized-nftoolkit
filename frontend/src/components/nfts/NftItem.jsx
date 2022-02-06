import PropTypes from "prop-types";
function NftItem({ nft: { target_id, image, name } }) {
	let currentPrice = 30000;
	let purchasePrice = 10000;
	let profit = currentPrice - purchasePrice;

	let title = "#314 Leo's Dream"
  return (
    <div class="flex flex-col space-y-3 ">
      <div className="bg-yellow-500 p-5 rounded-md">
        <h1 className="text-black text-lg ">{name}</h1>
        <img className="rounded-md" src={image} alt="Profile" />
        {/* <h1 className="text-black">{contract_ticker_symbol}</h1> */}
      </div>
	  <div class = "shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-[#E4EDF4] rounded-[15px] min-12">	
			<div class="flex flex-col">
				<h1 class= "text-center text-3xl">{title}</h1>
				<div class="flex flex-row ml-2">
					<p>Current price: ${currentPrice} </p>
					<p>Purchase price: ${purchasePrice} </p>
					<p>Profit: ${profit}</p>
				</div>
			</div>
	  </div>
    </div>
  );
}
export default NftItem;
