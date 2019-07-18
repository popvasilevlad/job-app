import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import Styled from './style';
import { Redirect } from 'react-router-dom';

const NotFound = () => {
	const [redirect, setRedirect] = useState(false);

	if (redirect) {
		return (
			<Redirect to="/" />
		)
	}

	return (
		<Styled.Container id="not-found-page">
			<Styled.GridElement className={'testtt'} container>
				<Grid item sm={12} md={3}>
					<Styled.Heading variant={'h1'}>
						404
					</Styled.Heading>
				</Grid>
				<Grid item sm={12} md={9}>
					<Styled.Heading variant={'h3'}>
						Oops! Page not found...
					</Styled.Heading>
					<Styled.Heading variant={'h5'}>
						I think you're lost. You shold go home :)
					</Styled.Heading>
					<Styled.ButtonContainer>
						<Button
							id='redirect-to-home-btn'
							variant="contained"
							color="secondary"
							size="large"
							onClick={() => setRedirect(true)}
							>
								GO HOME
						</Button>
					</Styled.ButtonContainer>
				</Grid>
			</Styled.GridElement>
		</Styled.Container>
	);
}

export default NotFound;

