import { useMetaMask } from 'metamask-react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
	setMetamaskAddress,
	isNotConnected,
} from '../features/covalent/covalentSlice';

function ConnectWallet() {
	const { status, connect, account } = useMetaMask();
	const dispatch = useDispatch();

	useEffect(() => {
		if (status === 'connected') {
			//this should actually be account, but we want to use Max's gallery
			dispatch(
				setMetamaskAddress('0xDec7778a7E416b0f4988Bb1Faff70cE9FAD6C233')
			);
		}
	}, [status]);

	if (status === 'initializing')
		return <div>Synchronisation with MetaMask ongoing...</div>;

	if (status === 'unavailable') {
		dispatch(isNotConnected(true));
		return <div>MetaMask not available :(</div>;
	}
	if (status === 'notConnected') {
		dispatch(isNotConnected(true));
		return <button onClick={connect}>Connect to MetaMask</button>;
	}

	if (status === 'connecting') return <div>Connecting...</div>;

	if (status === 'connected') {

		return <div>Connected Wallet: {account}</div>;
	}

	return ConnectWallet;
}

export default ConnectWallet;
