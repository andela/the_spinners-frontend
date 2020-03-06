import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
	Divider,
	colors,
	Stepper,
	Step,
	StepLabel,
	Button,
	Typography,
	Paper,
	Grid
} from '@material-ui/core';

import Header from '../common/SettingsHeader';
import AccommodationForm from './AccommodationForm';
import RoomsForm from './RoomsForm';
import AddOnServiceForm from './AddOnServiceForm';
import AmenitiesForm from './AmenitiesForm';

const useStyles = makeStyles(theme => ({
	divider: {
		backgroundColor: colors.grey[300],
		marginBottom: '1%'
	},
	content: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2)
	},
	root: {
		width: '100%'
	},
	button: {
		width: 300,
		marginBottom: theme.spacing(1)
	},
	button1: {
		width: 300,
		marginRight: theme.spacing(1),
		marginBottom: theme.spacing(1)
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1)
	}
}));

function getSteps() {
	return ['Information', 'Add-On Services', 'Amenities', 'Add room'];
}

function getStepContent(step) {
	switch (step) {
		case 0:
			return <AccommodationForm />;
		case 1:
			return <AddOnServiceForm />;
		case 2:
			return <AmenitiesForm />;
		case 3:
			return <RoomsForm />;
		default:
			return 'Unknown step';
	}
}

const Settings = props => {
	const { user } = props;
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const steps = getSteps();

	const handleNext = () => {
		setActiveStep(prevActiveStep => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<>
			<Header title='Accommodation' subtitle='Add new Accommodations' />
			<Divider className={classes.divider} />
			<div className={classes.root}>
				<Stepper activeStep={activeStep} component={Paper}>
					{steps.map(label => {
						const stepProps = {};
						const labelProps = {};
						return (
							<Step key={label} {...stepProps}>
								<StepLabel {...labelProps} user={user}>
									{label}
								</StepLabel>
							</Step>
						);
					})}
				</Stepper>
				<div>
					{activeStep === steps.length ? (
						<div>
							<Typography className={classes.instructions}>
								All steps completed - you&apos;re finished
							</Typography>
							<Button onClick={handleReset} className={classes.button}>
								Reset
							</Button>
						</div>
					) : (
						<div>
							<Grid className={classes.content}>{getStepContent(activeStep)}</Grid>
							<Grid style={{ float: 'right' }}>
								<Button
									disabled={activeStep === 0}
									onClick={handleBack}
									className={classes.button1}
									variant='contained'
									color='default'
								>
									Back
								</Button>
								<Button
									variant='contained'
									color='primary'
									onClick={handleNext}
									className={classes.button}
								>
									{activeStep === steps.length - 1 ? 'Add Accommodation' : 'Next'}
								</Button>
							</Grid>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Settings;
