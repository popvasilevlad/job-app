import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchJobData } from '../actions';
import LoadingSpinner from './loading-spinner';

class ResultDetailsClass extends PureComponent {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchJobData(id);
	}

	render() {
		const { openedJob: data, loading } = this.props;
		console.log(data);
		
		if (loading) {
			return(
				<LoadingSpinner size={60}/>
			)
		}

		return (
			<div>
				{data.title}<br/>
				{data.description}<br/>
				{data.employment_type}<br/>
			</div>
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

const ResultDetails = connect(mapStateToProps, mapDispatchToProps)(ResultDetailsClass);

export default ResultDetails;