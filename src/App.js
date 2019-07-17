import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid, Container } from '@material-ui/core';
import { connect } from 'react-redux';
import Home from './pages/home';
import NotFound from './pages/not-found';
import JobDetails from './pages/job-details';
import ErrorMessage from './components/error-message';

const mapStateToProps = state => {
	return {
		error: state.error
	}
}
class AppClass extends Component {
	render() {
		if (this.props.error) {
			return (
				<Container maxWidth="md" >
					<Grid container justify="center" >
						<ErrorMessage />
					</Grid>
				</Container>
			);
		}

		return (
			<Container maxWidth="md" >
				<Grid justify="center" >
					<Router>
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/job/:id" exact component={JobDetails} />
							<Route component={NotFound} />
						</Switch>
					</Router>
				</Grid>
			</Container>
		);
	}
}

const App = connect(mapStateToProps, '')(AppClass);

export default App;
