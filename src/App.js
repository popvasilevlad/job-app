import React, { Component } from 'react';
import Home  from './components/home';
import Result from './components/result';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
		loading: state.loading
	}
}
class AppClass extends Component {
	render() {
		return (
			<Container maxWidth="md">
				<Router>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/job/:id" component={Result} />
					</Switch>
				</Router>
			</Container>
		);
	}
}

const App = connect(mapStateToProps, '')(AppClass);

export default App;
