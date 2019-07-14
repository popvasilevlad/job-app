import React, { Component } from 'react';
import { loadHome } from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = dispatch => {
    return {
      loadHome: () => dispatch(loadHome())
    }
}

const Home = () => {
	console.log('home')
	return (
		<div>HOME</div>
	)
}


// class HomeClass extends Component {
// 	render() {
// 		console.log('rendere Home')
// 		this.props.loadHome();
		
// 	}
// }

// const Home = withRouter(connect('', mapDispatchToProps)(HomeClass));

export default Home;