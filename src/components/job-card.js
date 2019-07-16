import React, { Component } from 'react';
import styled from 'styled-components';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';

const StyledCard = styled(Card)`
	&& {
	    
	}
`;
export default class JobCard extends Component {
	render() {
		const { id, title, description, employment_type } = this.props.data;

		return(
			<StyledCard>
				<CardContent>
					{title}, <br/>
					{description} <br/>
					{employment_type} <br/>
					<Link to={`/job/${id}`}>
						See more
					</Link>
				</CardContent>
			</StyledCard>

		);
	}
}