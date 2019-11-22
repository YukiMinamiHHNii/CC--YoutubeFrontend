import React from "react";
import { getVideoList } from "../utils/ApiOps";
import { Spinner, Row } from "reactstrap";
import { DisplayError } from "./General";
import { VideoDescription } from "./Description";
import Search from "./Search";
import { VideoModal } from "./VideoModal";

const INITIAL_STATE = {
	isLoading: true,
	data: null,
	error: false,
	extended: false,
	isOpen: false,
	video: null
};

class VideoFeed extends React.Component {
	state = { ...INITIAL_STATE };
	getFeed = ({ term, maxResults, page }) => {
		return getVideoList({ term, maxResults, page })
			.then(response => {
				return this.setState({
					isLoading: false,
					data: response,
					error: false
				});
			})
			.catch(error => {
				return this.setState({ isLoading: false, data: null, error: true });
			});
	};
	componentDidMount() {
		return this.getFeed({ term: null, maxResults: null, page: null });
	}
	updateFeed = ({ term, maxResults, page }) => {
		return this.setState(
			{
				term: INITIAL_STATE.term,
				maxResults: INITIAL_STATE.maxResults,
				page: INITIAL_STATE.page
			},
			() => this.getFeed({ term, maxResults, page })
		);
	};
	updateGrid = () => {
		return this.setState(prevState => {
			return { extended: !prevState.extended };
		});
	};
	trigger = video => {
		return this.setState(prevState => {
			return { isOpen: !prevState.isOpen, video };
		});
	};
	render() {
		return (
			<Row className="mt-3">
				{this.state.isLoading && (
					<div className="col-12 channel-title">
						<Spinner color="primary" />
					</div>
				)}
				{!this.state.isLoading && (
					<Search
						onSearch={this.updateFeed}
						onExtend={this.updateGrid}
						prev={this.state.data!==null?this.state.data.prevPageToken:null}
						next={this.state.data!==null?this.state.data.nextPageToken:null}
					/>
				)}
				{!this.state.isLoading &&
					this.state.data !== null &&
					this.state.data.items.map(item => {
						return (
							<VideoItem
								key={item.id.videoId}
								video={item.id.videoId}
								title={item.snippet.title}
								description={item.snippet.description}
								thumbnail={item.snippet.thumbnails.medium.url}
								extended={this.state.extended}
								trigger={this.trigger}
							/>
						);
					})}
				{!this.state.isLoading && this.state.error && (
					<DisplayError section="video" />
				)}
				<VideoModal
					isOpen={this.state.isOpen}
					trigger={this.trigger}
					video={this.state.video}
				/>
			</Row>
		);
	}
}

function VideoItem({
	video,
	title,
	description,
	thumbnail,
	extended,
	trigger
}) {
	return (
		<div
			className={`col-sm-12 ${extended ? "col-md-3" : "col-md-4"} mb-3`}
			onClick={() => trigger(video)}
		>
			<div className="card">
				<img className="card-img" src={thumbnail} alt={title} />
				<VideoDescription title={title} description={description} />
			</div>
		</div>
	);
}

export default VideoFeed;
