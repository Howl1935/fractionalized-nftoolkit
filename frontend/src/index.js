import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { MetaMaskProvider } from "metamask-react";
ReactDOM.render(
	<React.StrictMode>
      <MetaMaskProvider>
		<Provider store={store}>
			<App className='font-roboto'/>
		</Provider>
   	</MetaMaskProvider>
	</React.StrictMode>,
	document.getElementById('root'));