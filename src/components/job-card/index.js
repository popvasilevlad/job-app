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
            <Styled.CardElement>
                <Styled.CardContentElement>
                    <Styled.TopCardSection>
                        <i className="material-icons">
                            {iconsCategoryMap[category]}
                        </i>
                        <Styled.JobTitle variant="h6" component="h2">
                            {title}
                        </Styled.JobTitle>
                        <Styled.JobSubTitle>
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