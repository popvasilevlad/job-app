import React from 'react';
import Home  from './components/home';
import Result from './components/result';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';

const x = async () => {
	const response = await fetch('/api/jobs',
		{ 
			headers : { 
		        'Content-Type': 'application/json',
		        'Accept': 'application/json'
		    }
       	});
	let data = await response.json();
  	
  	return data;
}

x().then(res => console.log('ressss = ', res));

function App() {
  return (
  	<Container maxWidth="md">
	    <Router>
	    	<Switch>
				<Route path="/" exact component={ Home } />
				<Route path="/result" component={Result} />
			</Switch>
		</Router>
	</Container>
  );
}

export default App;
