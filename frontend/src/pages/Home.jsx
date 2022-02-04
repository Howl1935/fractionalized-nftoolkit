
import {useState, useEffect} from "react";

function Home() {
  const [wallet, setWalletAddress] = useState('');

  useEffect(()=>{
    console.log(wallet)
  },[])

  const connectWallet = async () => {  // Check if MetaMask is installed on user's browser
    if(window.ethereum) {    
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });    
      const chainId = await window.ethereum.request({ method: 'eth_chainId'});    // Check if user is connected to Mainnet
      
      if(chainId != '0x1') {
        alert("Please connect to Mainnet");
      } 
      else {
        console.log('here '+ accounts);
        let wallet = accounts[0];
        setWalletAddress(wallet);
        // console.log("Success");
        // console.log("address" + wallet);
      }  } 
      else {
      alert("Please install Mask");
    }
  }
  return (
  <button className = "btn" onClick= {connectWallet}>Connect</button>
);
  //return <div>Home</div>;


}


export default Home;
