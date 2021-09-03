import React from 'react';

import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import './topbar.css';

const Topbar = () => {
	return (
		<div className='topbar'>
			<div className='topbarWrapper'>
				<div className='topLeft'>
					<span className='logo'>lamaadmin</span>
				</div>
				<div className='topRight'>
					<div className='topbarIconContainer'>
						<NotificationsNone />
						<span className='topIconBadge'>2</span>
					</div>

					<div className='topbarIconContainer'>
						<Language />
						<span className='topIconBadge'>2</span>
					</div>

					<div className='topbarIconContainer'>
						<Settings />
					</div>

					<img
						src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
						alt='profile'
						className='topAvatar'
					/>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
