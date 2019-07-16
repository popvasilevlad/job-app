import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import SpinnerWrapper from './style';

const LoadingSpinner = () => (
    <SpinnerWrapper>
        <CircularProgress size={60} />
    </SpinnerWrapper>
);

export default LoadingSpinner;