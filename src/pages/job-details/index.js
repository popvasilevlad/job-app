import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJobData } from '../../actions';
import LoadingSpinner from '../../components/loading-spinner';
import Styled from './style';
import { Grid, Button, Container} from '@material-ui/core';
import { iconsCategoryMap } from '../../constants/utils';
import NotFound from '../not-found';

class JobDetails extends Component {
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

		if (data.code === 'not_found') {
			return (
				<NotFound />
			)
		}

		return (
			<Styled.Container id="job-details-container">
				<Styled.CardElement>
					<Grid container spacing={3}>
						<Grid item xs={12} md={4} align={'center'}>
							<div>
								<i className="material-icons">
									{iconsCategoryMap[data.category]}
								</i>
							</div>
							<br/>
							<Styled.JobDetailsTitle variant="h1">
								{data.title}
							</Styled.JobDetailsTitle>
							<br/>
							{data.employment_type}<br/>
						</Grid>
						<Grid item xs={12} md={8} >
							<Styled.DescriptionSection>
								<Styled.DescriptionTitle variant="h6">Description:</Styled.DescriptionTitle>
								{data.description}
							</Styled.DescriptionSection>
							<Styled.DescriptionSection>
								<Styled.DescriptionTitle variant="h6">What you have:</Styled.DescriptionTitle>
								{data.description}
							</Styled.DescriptionSection>
							<Styled.DescriptionSection>
								<Styled.DescriptionTitle variant="h6">What we offer:</Styled.DescriptionTitle>
								{data.description}
							</Styled.DescriptionSection>
						</Grid>
					</Grid>
				</Styled.CardElement>
				<Container align="center">
					<Button variant="contained" color="secondary" size="large">
						Apply now
					</Button>
				</Container>
			</Styled.Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(JobDetails);