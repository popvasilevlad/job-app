import { Grid } from '@material-ui/core';
import styled from 'styled-components';

const Header = styled.header`
	padding: 50px 0;
	text-align: center;
	opacity: 0.6;
`;
const GridElement = styled(Grid)`
	padding: 30px 0;
`;

const StyledElements = {
    Header,
    GridElement
};

export default StyledElements;