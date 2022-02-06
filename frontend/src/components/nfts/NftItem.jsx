import PropTypes from "prop-types";
function NftItem({ nft: { target_id, image, name } }) {
	let currentPrice = 30000;
	let purchasePrice = 10000;
	let profit = currentPrice - purchasePrice;

	let title = "#314 Leo's Dream"
  return (
    <div class="flex flex-col space-y-3 box-border h-70">
      <div className="bg-yellow-500 p-5 rounded-md">
        <h1 className="text-black text-lg place-content-center text-center">{name}</h1>
        
			<img className="mx-auto rounded-md min-h-52 max-h-52 " src={image} alt="Profile" />
			
        {/* <h1 className="text-black">{contract_ticker_symbol}</h1> */}
      </div>
	  <div class = "shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-[#ffffe0] rounded-[15px] min-12">	
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
