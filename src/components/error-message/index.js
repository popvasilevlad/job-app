import React from 'react';
import Styled from './style';
import { Typography } from '@material-ui/core';

const ErrorMessage = () => (
    <Styled.Container>
        <i className="material-icons">
            sentiment_dissatisfied
        </i>
       <Typography variant="h2">
            Something went wrong.
        </Typography>
        <Typography variant="h4">
            Please try again.
        </Typography>
        <Styled.InstructionsSection>
            <Styled.InstructionsLine>
                Make sure the server is runing, if not, run "npm run build", and "npm run server";
            </Styled.InstructionsLine>
            <Styled.InstructionsLine>
                The server runs on port 8080. Please make sure it's not occupied;
            </Styled.InstructionsLine>
            <Styled.InstructionsLine>
                If you modified the data.json file containing the jobs list, please make sure it's properly written;
            </Styled.InstructionsLine>
            <Styled.InstructionsLine>
                If you made any other changes, I'm sorry. That's on you :)
            </Styled.InstructionsLine>
        </Styled.InstructionsSection>
    </Styled.Container>
)

export default ErrorMessage;