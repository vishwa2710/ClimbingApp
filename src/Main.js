import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './routesForm';
import Home from './Home';

const Main = () => (
	<Main>
		<Switch>
			<Route exact path='/' component={Home}/>
			<Route path='/routesForm' component={App}/>
		</Switch>
	</Main>
)

export default Main;