import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';

const App: React.FC<AppProps> = props => {

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
			</Switch>
		</BrowserRouter>
	);

}

interface AppProps {}

export default App;