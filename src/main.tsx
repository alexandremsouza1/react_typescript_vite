import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';
import configureStore from './redux/store';

const store = configureStore();
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<HelmetProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</HelmetProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);
