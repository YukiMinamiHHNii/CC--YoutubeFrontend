import React from "react";

export const Description = ({ title, description }) => {
	return (
		<div>
			<h1 className="channel-title header">{title}</h1>
			<h4 className="channel-desc">{description}</h4>
		</div>
	);
};

export const VideoDescription= ({title, description})=>{
	return (
		<div>
			<h3 className="card-name">{title}</h3>
			<h4 className="card-details">{description}</h4>
		</div>
	);
}