import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Button, Card, CardContent, CardHeader, Divider, TextField } from '@material-ui/core';
import 'regenerator-runtime/runtime';
import { DropzoneDialog } from 'material-ui-dropzone';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles(() => ({
	button: {
		width: 300
	}
}));

const AccommodationForm = () => {
	const classes = useStyles();
	const [values, setValues] = useState({
		// name: 'profile.name'
		// phone: profile.phone,
		// state: profile.locationId,
		// country: profile.description
		// typeId:profile.typeId
	});

	const handleChange = event => {
		event.persist();

		// setValues({
		// 	...values,
		// 	[event.target.name]:
		// 		event.target.type === 'checkbox' ? event.target.checked : event.target.value
		// });
	};

	const handleSubmit = event => {
		event.preventDefault();
	};
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const states = ['Alabama', 'New York', 'San Francisco'];
	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<CardHeader title='Accommodation details' />
				<Divider />
				<CardContent>
					<Grid container spacing={4}>
						<Grid item md={4} xs={12}>
							<TextField
								fullWidth
								// helperText='Please specify the first name'
								label='name'
								name='name'
								onChange={handleChange}
								required
								size='small'
								// value={values.name}
								variant='outlined'
							/>
						</Grid>
						<Grid item md={4} xs={12}>
							<TextField
								fullWidth
								label='Select type'
								name='typeId'
								onChange={handleChange}
								select
								// eslint-disable-next-line react/jsx-sort-props
								SelectProps={{ native: true }}
								size='small'
								// value={values.typeId}
								variant='outlined'
							>
								{states.map(state => (
									<option key={state} value={state}>
										{state}
									</option>
								))}
							</TextField>
						</Grid>
						<Grid item md={4} xs={12}>
							<TextField
								fullWidth
								label='Select Location'
								name='locationId'
								onChange={handleChange}
								select
								// eslint-disable-next-line react/jsx-sort-props
								SelectProps={{ native: true }}
								size='small'
								// value={values.locationId}
								variant='outlined'
							>
								{states.map(state => (
									<option key={state} value={state}>
										{state}
									</option>
								))}
							</TextField>
						</Grid>

						<Grid item xs={12}>
							<TextField
								fullWidth
								label='Enter description'
								multiline
								name='description'
								onChange={handleChange}
								required
								rows='2'
								// value={values.description}
								variant='outlined'
							/>
						</Grid>
						<Grid item xs={12}>
							<Button
								variant='contained'
								color='default'
								onClick={handleOpen}
								startIcon={<CloudUploadIcon />}
							>
								Upload Images
							</Button>

							<DropzoneDialog
								open={open}
								acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
								filesLimit={5}
								maxFileSize={5000000}
								onClose={handleClose}
							/>
						</Grid>
					</Grid>
				</CardContent>
				<Divider />
			</form>
		</Card>
	);
};
export default AccommodationForm;
