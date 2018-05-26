import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WorkoutsForm from './workoutsForm';
import Home from './Home';

const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={ Home }/>
			<Route exact path='/routes' component={ WorkoutsForm }/>
		</Switch>
	</main>
)

export default Main;