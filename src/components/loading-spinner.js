import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';

const SpinnerWrapper = styled.div`
    position: fixed;
    top: calc(50% - 30px);
    left: calc(50% - 30px);
`;

 class LoadingSpinner extends Component {
   render() {
        return(
            <SpinnerWrapper>
                <CircularProgress size={60} />
            </SpinnerWrapper>
        )
    }
}


export default LoadingSpinner;