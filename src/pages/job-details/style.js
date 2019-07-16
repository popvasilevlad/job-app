import styled from 'styled-components';
import { Card, Typography } from '@material-ui/core';

const Container = styled.div`
    margin: 80px 0;
`;

const CardElement = styled(Card)`
    display: flex;
    padding: 30px 20px;
    i {
        font-size: 60px;
        opacity: 0.8;
    }
    margin: 40px 0;
`;
const JobDetailsTitle = styled(Typography)`
    && {
        font-weight: 800;
        opacity: 0.8;
        font-size: 40px;
        color: #27858a;
        letter-spacing: 0.05em;
    }
`;

const DescriptionSection = styled.section`
    padding-bottom: 40px;
    opacity: 0.8;
    &:not(:first-of-type) {
        padding-top: 40px;
        border-top: 1px solid rgba(0,0,0,0.2);
    }
`;

const DescriptionTitle = styled(Typography)`
    && {
        margin-bottom: 20px;
    }
`;


const StyledElements = {
    Container,
    CardElement,
    DescriptionSection,
    DescriptionTitle,
    JobDetailsTitle
}

export default StyledElements;