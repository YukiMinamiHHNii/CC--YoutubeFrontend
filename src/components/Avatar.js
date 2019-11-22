import React from "react";

export const Avatar = ({ image, title }) => {
	return (
		<div className="channel-img d-flex justify-content-center align-items-center">
			<img src={image} alt={title} />
		</div>
	);
};
