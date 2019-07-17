import { Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';

const Container = styled.div`
	padding-top: 30%;
	min-height: 500px;
`;

const GridElement = styled(Grid)`
	opacity: 0.6;
`;

const Heading = styled(Typography)`
	&& {
		margin-bottom: 30px;
		font-weight: 800;
	}
`;
const ButtonContainer = styled.div`
	text-align: center;
`;

const Styled = {
	GridElement,
	Container,
	ButtonContainer,
	Heading
};

export default Styled;