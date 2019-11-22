import React from "react";
import { Spinner, Row } from "reactstrap";
import { Avatar } from "./Avatar";
import { Description } from "./Description";
import { DisplayError } from "./General";
import { getChannelInfo } from "../utils/ApiOps";

class Channel extends React.Component {
	state = {
		isLoading: true,
		data: null,
		error: false
	};
	componentDidMount() {
		return getChannelInfo()
			.then(response => {
				return this.setState({
					data: response,
					isLoading: false
				});
			})
			.catch(error => {
				return this.setState({ data: null, isLoading: false, error: true });
			});
	}
	render() {
		return (
			<div>
				{this.state.isLoading && (
					<div className="col-12 channel-title">
						<Spinner color="primary" />
					</div>
				)}
				{!this.state.isLoading && this.state.data !== null && (
					<DisplayChannelInfo data={this.state.data} />
				)}
				{!this.state.isLoading && this.state.error && (
					<DisplayError section="channel" />
				)}
			</div>
		);
	}
}

function DisplayChannelInfo({ data }) {
	return (
		<Row>
			<div className="col-xs-12 col-md-3 d-flex justify-content-center align-items-center">
				<Avatar image={data.thumbnails.medium.url} title={data.title} />
			</div>
			<div className="col-xs-12 col-md-9">
				<Description title={data.title} description={data.description} />
			</div>
		</Row>
	);
}

export default Channel;
