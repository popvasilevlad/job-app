import React, { Component } from 'react';
import { fetchJobs } from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import JobCard from './job-card';
import Grid from '@material-ui/core/Grid';
import LoadingSpinner from './loading-spinner';

class HomeComponent extends Component {
	componentDidMount() {
		this.props.fetchJobs();
	}

	render() {
		const { jobs, loading } = this.props;
		
		if (loading) {
			return(
				<LoadingSpinner size={60}/>
			)
		}
		
		return (
			<div>
				<Grid container spacing={3}>
					{
						jobs.map(job => (
							<Grid item key={job.id} xs={12} sm={6} md={4}>
								<JobCard data={job}/>
							</Grid>
						))
					}
				</Grid>
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

