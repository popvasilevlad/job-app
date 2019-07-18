import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchJobs } from '../../actions';
import JobCard from '../../components/job-card/index.js';
import LoadingSpinner from '../../components/loading-spinner';
import Styled from './style';
import { Typography, Grid } from '@material-ui/core';

class Home extends Component {
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
			<div id="home-page">
				<Styled.Header>
					<Typography variant="h3">The largest jobs platform in the world.</Typography>
					<br/>
					<Typography variant="h5">Find your future job now!</Typography>
				</Styled.Header>
				<Styled.GridElement container spacing={3}>
					{
						jobs.map(job => (
							<Grid item key={job.id} xs={12} sm={6} md={4}>
								<JobCard job={job}/>
							</Grid>
						))
					}
				</Styled.GridElement>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));


