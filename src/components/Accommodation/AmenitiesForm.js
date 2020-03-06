import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Card, CardContent, CardHeader, Divider } from '@material-ui/core';
import 'regenerator-runtime/runtime';
import ChipInput from 'material-ui-chip-input';

const useStyles = makeStyles(theme => ({
	chip: {
		margin: theme.spacing(3, 0)
	}
}));

const AmenitiesForm = () => {
	const classes = useStyles();
	// const [values, setValues] = useState();
	// const [chipData, setChipData] = React.useState([]);

	// const handleChange = event => {
	// 	event.persist();
	// 	setValues(event.target.value);
	// };

	const handleSubmit = event => {
		event.preventDefault();
		// const re = /\s*(?:;|$)\s*/;
		// console.log(values.target.value.split(re));
		// if (event.target.value.indexOf(',') > -1) {
		// 	setChipData(prev => [...prev, { amenity: event.target.value.split(re) }]);
		// }
	};

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<CardHeader title='Add accommodation amenities' />
				<CardContent>
					<Grid container spacing={4}>
						<Grid item md={6} xs={12} className={classes.chip}>
							<ChipInput
								variant='outlined'
								size='small'
								helperText='Enter service name and click enter'
								label='Amenities'
								fullWidth
								// value={yourChips}
								// onAdd={chip => handleAddChip(chip)}
								// onDelete={(chip, index) => handleDeleteChip(chip, index)}
							/>
						</Grid>
					</Grid>
				</CardContent>
				<Divider />
			</form>
		</Card>
	);
};
export default AmenitiesForm;
