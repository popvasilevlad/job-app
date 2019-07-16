import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import Home from './pages/home';
import JobDetails from './pages/job-details';

const mapStateToProps = state => {
	return {
		loading: state.loading,
		error: state.error
	}
}
class AppClass extends Component {
	render() {
		if (this.props.error) {
			console.log(this.props.error);
			//render something went wrong
			return false;
		}

		return (
			<Container maxWidth="md">
				<Router>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/job/:id" component={JobDetails} />
					</Switch>
				</Router>
			</Container>
		);
	}
}

const App = connect(mapStateToProps, '')(AppClass);

export default App;
