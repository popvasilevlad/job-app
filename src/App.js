/* eslint-disable */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { connect } from 'react-redux';
import Home from './pages/home';
import NotFound from './pages/not-found';
import JobDetails from './pages/job-details';
import ErrorMessage from './components/error-message';

const mapStateToProps = state => {
	return {
		error: state.error
	};
};

const App = (props) => {
	if(props.error) {
    	return(
    		<Container justify={'center'} maxWidth={'md'}>
    			<ErrorMessage />
    		</Container>
    	);
	}

	return(
    	<Container justify={'center'} maxWidth={'md'}>
			<Router>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/job/:id' exact component={JobDetails} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		</Container>
	);
};

export default connect(mapStateToProps,  '')(App);