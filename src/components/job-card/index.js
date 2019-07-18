import React from 'react';
import { Link } from 'react-router-dom';
import { iconsCategoryMap } from '../../constants/utils';
import Styled from './style';

const JobCard = props => {
    const {
        id,
        title,
        employment_type,
        category
    } = props.job;

    return(
        <Link to={`/job/${id}`}>
            <Styled.CardElement id={'job-card'}>
                <Styled.CardContentElement>
                    <Styled.TopCardSection>
                        <i 
                            id="job-card-icon"
                            className="material-icons"
                        >
                            {iconsCategoryMap[category]}
                        </i>
                        <Styled.JobTitle
                            id="job-card-title"
                            variant="h6"
                            component="h2"
                        >
                            {title}
                        </Styled.JobTitle>
                        <Styled.JobSubTitle id="job-card-type">
                            {employment_type}
                        </Styled.JobSubTitle>
                    </Styled.TopCardSection>
                    <Styled.BottomCardSection>
                            <div>
                                <i className="material-icons">
                                    arrow_forward
                                </i>
                            </div>
                            View more
                    </Styled.BottomCardSection>
                </Styled.CardContentElement>
            </Styled.CardElement>
        </Link>
    );
}

export default JobCard;