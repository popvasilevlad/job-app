import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
    flex-direction: column;
    opacity: 0.5;
	height: 100%;
	position: fixed;
    i {
        font-size: 90px;
        margin-bottom: 40px;
    }
    text-align: center;
`;


const InstructionsSection = styled.ul`
    margin-top: 70px;
    text-align: left;
`;

const InstructionsLine = styled.li`
    margin: 10px 0;
`;

const Styled = {
    Container,
    InstructionsSection,
    InstructionsLine
}
export default Styled;