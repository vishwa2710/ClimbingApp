import React from 'react';
import { render } from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';


const View = () => (
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

render(<View />, document.getElementById('root'));
registerServiceWorker();
