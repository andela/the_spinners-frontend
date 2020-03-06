import React from 'react';
import Accommodations from '../components/Accommodation/Accommodation';

const AccommodationsView = props => {
	const { userRole } = props;
	return (
		<>{userRole === 'travel_team_member' || (userRole === 'travel_admin' && <Accommodations />)}</>
	);
};
export default AccommodationsView;
