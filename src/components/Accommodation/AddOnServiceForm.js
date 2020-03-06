import React, { useState } from 'react';
import {
	Grid,
	Card,
	CardContent,
	CardHeader,
	Divider,
	TextField,
	InputAdornment,
	Button
} from '@material-ui/core';
import 'regenerator-runtime/runtime';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const AddOnServiceForm = () => {
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

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<CardHeader title='Add accommodation add-ons' />
				<CardContent>
					<Grid container spacing={4}>
						<Grid item md={3} xs={12}>
							<TextField
								fullWidth
								label='Service name'
								name='serviceName'
								onChange={handleChange}
								required
								size='small'
								variant='outlined'
							/>
						</Grid>

						<Grid item md={4} xs={12}>
							<TextField
								fullWidth
								label='Enter description'
								name='description'
								onChange={handleChange}
								required
								size='small'
								// value={values.description}
								variant='outlined'
							/>
						</Grid>
						<Grid item md={2} xs={12}>
							<TextField
								fullWidth
								label='Price'
								name='typeId'
								onChange={handleChange}
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
export default AddOnServiceForm;
