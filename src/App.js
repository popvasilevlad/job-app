import React from 'react';
import { Home } from './components/home';
import { Search } from './components/search';
import { Result } from './components/result';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
		<Route path="/" exact component={Home} />
		<Route path="/search" component={Search} />
		<Route path="/test" component={() => (<div>Test</div>)} />
	</Router>
  );
}

export default App;
