import React, { useState } from 'react';
import {
	Grid,
	Button,
	Card,
	CardContent,
	CardHeader,
	Divider,
	TextField,
	InputAdornment
} from '@material-ui/core';
import 'regenerator-runtime/runtime';
import { DropzoneDialog } from 'material-ui-dropzone';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const RoomsForm = () => {
	const [values, setValues] = useState();

	const handleChange = event => {
		event.persist();

		setValues({
			...values,
			[event.target.name]: event.target.value
		});
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

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<CardHeader title='Room details' />
				<Divider />
				<CardContent>
					<Grid container spacing={4}>
						<Grid item md={2} xs={12}>
							<TextField
								fullWidth
								// helperText='Please specify the first name'
								label='Type'
								name='roomType'
								onChange={handleChange}
								required
								size='small'
								// value={values.name}
								variant='outlined'
							/>
						</Grid>
						<Grid item md={2} xs={12}>
							<TextField
								fullWidth
								label='Guests'
								name='numberOfPeople'
								onChange={handleChange}
								required
								size='small'
								variant='outlined'
							>
								Price
							</TextField>
						</Grid>
						<Grid item md={2} xs={12}>
							<TextField
								fullWidth
								label='Price'
								name='typeId'
								onChange={handleChange}
								required
								size='small'
								// value={values.typeId}
								variant='outlined'
								InputProps={{
									startAdornment: <InputAdornment position='start'>$</InputAdornment>
								}}
							>
								Price
							</TextField>
						</Grid>
						<Grid item md={2} xs={12}>
							<TextField
								fullWidth
								label='Rooms'
								name='typeId'
								helperText='How many rooms of this type?'
								onChange={handleChange}
								required
								size='small'
								// value={values.typeId}
								variant='outlined'
							>
								Price
							</TextField>
						</Grid>
						<Grid item md={2} xs={12}>
							<Button
								variant='contained'
								color='default'
								onClick={handleOpen}
								startIcon={<CloudUploadIcon />}
							>
								Add Images
							</Button>

							<DropzoneDialog
								open={open}
								acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
								filesLimit={5}
								maxFileSize={5000000}
								onClose={handleClose}
							/>
						</Grid>
						<Grid item md={2} xs={12}>
							<Button
								variant='contained'
								color='primary'
								// className={classes.button}
								startIcon={<AddCircleIcon />}
							>
								Add More
							</Button>
						</Grid>
					</Grid>
				</CardContent>
				<Divider />
			</form>
		</Card>
	);
};
export default RoomsForm;
