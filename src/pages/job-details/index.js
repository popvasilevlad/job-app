import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchJobData } from '../../actions';
import LoadingSpinner from '../../components/loading-spinner';
import StyledElements from './style';
import { Grid, Button } from '@material-ui/core';
import { iconsCategoryMap } from '../../constants/utils';

class JobDetailsClass extends PureComponent {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchJobData(id);
	}

	render() {
		const { openedJob: data, loading } = this.props;
		
		if (loading) {
			return(
				<LoadingSpinner size={60}/>
			)
		}

		return (
			<StyledElements.Container>
				<StyledElements.CardElement>
					<Grid container spacing={3}>
						<Grid item xs={12} md={4} align={'center'}>
							<div>
								<i className="material-icons">
									{iconsCategoryMap[data.category]}
								</i>
							</div>
							<br/>
							<StyledElements.JobDetailsTitle variant="h1">
								{data.title}
							</StyledElements.JobDetailsTitle>
							<br/>
							{data.employment_type}<br/>
						</Grid>
						<Grid item xs={12} md={8} >
							<StyledElements.DescriptionSection>
								<StyledElements.DescriptionTitle variant="h6">Description:</StyledElements.DescriptionTitle>
								{data.description}
							</StyledElements.DescriptionSection>
							<StyledElements.DescriptionSection>
								<StyledElements.DescriptionTitle variant="h6">What you have:</StyledElements.DescriptionTitle>
								{data.description}
							</StyledElements.DescriptionSection>
							<StyledElements.DescriptionSection>
								<StyledElements.DescriptionTitle variant="h6">What we offer:</StyledElements.DescriptionTitle>
								{data.description}
							</StyledElements.DescriptionSection>
						</Grid>
					</Grid>
				</StyledElements.CardElement>
				<Grid container justify="center">
					<Button variant="contained" color="secondary" size="large">
						Apply now
					</Button>
				</Grid>
			</StyledElements.Container>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchJobData: id => dispatch(fetchJobData(id))
	}
}

const mapStateToProps = state => {
	return {
		openedJob: state.openedJob,
		loading: state.loading
	}
}

const JobDetails = connect(mapStateToProps, mapDispatchToProps)(JobDetailsClass);

export default JobDetails;