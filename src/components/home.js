import React, { Component } from 'react';
import { loadHome } from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import JobCard from './job-card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components';

const StyledCard = styled(Card)`
	&& {
	    
	}
`;

const mapDispatchToProps = dispatch => {
    return {
      loadHome: () => dispatch(loadHome())
    }
}

const HomeComponent = () => {
	console.log('homee sweet homeee');

	return (
		<div>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6} md={4}>
					<StyledCard>
						<CardContent>
							<JobCard />
						</CardContent>
					</StyledCard>
				</Grid>
			</Grid>
		</div>
	)
}

const Home = connect('', mapDispatchToProps)(HomeComponent);

export default Home;

