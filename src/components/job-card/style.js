import { Card, CardContent } from '@material-ui/core';
import styled from 'styled-components';
import { defaultColors } from '../../constants/utils';

export const CardElement = styled(Card)`
	&& {
		box-shadow: 0px 0px 10px -5px rgba(0,0,0,0.3);
	}
	&:hover {
		box-shadow: 0px 0px 10px -5px rgba(0,0,0,1);
	}
`;
const CardContentElement = styled(CardContent)`
	&&:last-child {
		padding-bottom: 15px;
	}
`;

const TopCardSection = styled.div`
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

const JobTitle = styled.div`
	margin-top: 10px;
    font-weight: 800;
    color: ${defaultColors.blue_1};
    font-size: 22px;
    opacity: 0.8;
    margin-top: 10px;
`;

const JobSubTitle = styled.div`
	font-size: 12px;
	opacity: 0.5;
`;


const BottomCardSection = styled.div`
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

const Styled = {
    CardContentElement,
    CardElement,
    JobTitle,
    JobSubTitle,
    TopCardSection,
    BottomCardSection
};

export default Styled;