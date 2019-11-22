import React from "react";


export const DisplayError = ({ section }) => {
	return (
		<div className="col-12">
			<h2 className="col-12 channel-title header">
				{`Error while retrieving ${section} info!`}
			</h2>
		</div>
	);
};
