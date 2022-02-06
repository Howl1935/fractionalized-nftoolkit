import PropTypes from "prop-types";
function NftItem({ nft: { target_id, image, name } }) {
	let currentPrice = 30000;
	let purchasePrice = 10000;
	let profit = currentPrice - purchasePrice;

	if(image === "" || image === null){
		return null
	}else{
  return (
    <div class="flex flex-col space-y-3 box-border h-70 ">
      <div className="bg-[#FFE790] pt-4 pb-4 rounded-md shadow-[0_4px_4px_rgba(0,0,0,0.10)]">
        
			<img className="mx-auto rounded-md min-h-52 max-h-52 " src={image} alt="Profile" />
			
      </div>
	  <div class = "shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-[#ffffe0] rounded-[15px] min-12 p-5">	
			<div class="flex flex-col">
				<h1 class= "text-center text-3xl">{name}</h1>
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
}
export default NftItem;
