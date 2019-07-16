import React, { Component } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';
import { iconsCategoryMap } from '../constants/utils';
import styled from 'styled-components';

const StyledCard = styled(Card)`
	&& {
		box-shadow: 0px 0px 10px -5px rgba(0,0,0,0.3);
	}
	&:hover {
		box-shadow: 0px 0px 10px -5px rgba(0,0,0,1);
	}
`;
const StyledCardContent = styled(CardContent)`
	&&:last-child {
		padding-bottom: 15px;
	}
`;

const StyledTopCardSection = styled.div`
	padding: 15px;
	text-align: center;
	i {
		font-size: 40px;
		opacity: 0.6;
	}
	font-weight: 500;
	text-decoration: none;
	letter-spacing: 0.05em;
`;

const StyledJobTitle = styled.div`
	margin-top: 10px;
    font-weight: 800;
    color: #27858a;
    font-size: 22px;
    opacity: 0.8;
    margin-top: 10px;
`;

const StyledJobSubTitle = styled.div`
	font-size: 12px;
	opacity: 0.5;
`;


const StyledBottomCardSection = styled.div`
	letter-spacing: 0.05em;
	font-size: 12px;
	opacity: 0.6;
	text-align: right;
	display: flex;
    flex-direction: row-reverse;
	i {
		font-size: 16px;
		line-height: 14px;
		opacity: 0.6;
	}
`;

export default class JobCard extends Component {
	render() {
		const {
			id,
			title,
			employment_type,
			category
		} = this.props.data;

		return(
			<Link to={`/job/${id}`}>
				<StyledCard>
					<StyledCardContent>
						<StyledTopCardSection>
							<i className="material-icons">
								{iconsCategoryMap[category]}
							</i>
							<StyledJobTitle variant="h6" component="h2">
								{title}
							</StyledJobTitle>
							<StyledJobSubTitle>
								{employment_type}
							</StyledJobSubTitle>
						</StyledTopCardSection>
						<StyledBottomCardSection>
								<div>
									<i className="material-icons">
										arrow_forward
									</i>
								</div>
								View more
						</StyledBottomCardSection>
					</StyledCardContent>
				</StyledCard>
			</Link>
		);
	}
}