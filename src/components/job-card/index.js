import React from 'react';
import { Link } from 'react-router-dom';
import { iconsCategoryMap } from '../../constants/utils';
import StyledCard from './style';

const JobCard = props => {
    const {
        id,
        title,
        employment_type,
        category
    } = props.job;

    return(
        <Link to={`/job/${id}`}>
            <StyledCard.CardElement>
                <StyledCard.CardContentElement>
                    <StyledCard.TopCardSection>
                        <i className="material-icons">
                            {iconsCategoryMap[category]}
                        </i>
                        <StyledCard.JobTitle variant="h6" component="h2">
                            {title}
                        </StyledCard.JobTitle>
                        <StyledCard.JobSubTitle>
                            {employment_type}
                        </StyledCard.JobSubTitle>
                    </StyledCard.TopCardSection>
                    <StyledCard.BottomCardSection>
                            <div>
                                <i className="material-icons">
                                    arrow_forward
                                </i>
                            </div>
                            View more
                    </StyledCard.BottomCardSection>
                </StyledCard.CardContentElement>
            </StyledCard.CardElement>
        </Link>
    );
}

export default JobCard;