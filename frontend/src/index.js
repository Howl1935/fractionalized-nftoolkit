import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
	<React.StrictMode>
      <MetaMaskProvider>
		<Provider store={store}>
			<App />
		</Provider>
   </MetaMaskProvider>
	</React.StrictMode>,
	document.getElementById('root')