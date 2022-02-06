import axios from 'axios'
const API_URL = 'https://api.covalenthq.com/v1/'


//1/address/0xDec7778a7E416b0f4988Bb1Faff70cE9FAD6C233/balances_v2/?no-nft-fetch=false&key=ckey_1e19f00677f24bd4a7e0479f7d0&nft=true
// Call to get ETH NFTS
const getNFTsETH = async (walletAddress) => {
    const response = await axios.get(`${API_URL}1/address/${walletAddress}/balances_v2/?no-nft-fetch=false&key=${process.env.REACT_APP_COVALENT_API_KEY}&nft=true`)
    return response.data.data
  }
 
  const getNFTsPoly = async (walletAddress) => {
    const response = await axios.get(`${API_URL}137/address/${walletAddress}/balances_v2/?no-nft-fetch=false&key=${process.env.REACT_APP_COVALENT_API_KEY}&nft=true`)
    return response.data.data
  }  

const covalentService = {
    getNFTsETH, getNFTsPoly

}
export default covalentService