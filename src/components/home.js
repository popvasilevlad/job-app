import React, { Component } from 'react';
import { loadHome } from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = dispatch => {
    return {
      loadHome: () => dispatch(loadHome())
    }
}

const HomeComponent = () => {
	console.log('render home');

	return (
		<div>HOME</div>
	)
}

const Home = withRouter(connect('', mapDispatchToProps)(HomeComponent));

export default Home;

