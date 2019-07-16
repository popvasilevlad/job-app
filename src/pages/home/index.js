import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchJobs } from '../../actions';
import JobCard from '../../components/job-card/index.js';
import LoadingSpinner from '../../components/loading-spinner';
import StyledElements from './style';
import { Typography, Grid } from '@material-ui/core';

class HomeComponent extends Component {
	componentDidMount() {
		this.props.fetchJobs();
	}

	render() {
        const {
            jobs,
            loading
        } = this.props;
    
		if (loading) {
			return(
				<LoadingSpinner size={60}/>
			)
		}
		
		return (
			<div>
				<StyledElements.Header>
					<Typography variant="h3">The largest jobs platform in the world.</Typography>
					<br/>
					<Typography variant="h5">Find your future job now!</Typography>
				</StyledElements.Header>
				<StyledElements.GridElement container spacing={3}>
					{
						jobs.map(job => (
							<Grid item key={job.id} xs={12} sm={6} md={4}>
								<JobCard job={job}/>
							</Grid>
						))
					}
				</StyledElements.GridElement>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
    return {
		fetchJobs: () => dispatch(fetchJobs())
    }
}

const mapStateToProps = state => {
	return {
		jobs: state.jobs,
		loading: state.loading
	}
}

const Home = withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeComponent));

export default Home;

