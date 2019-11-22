import dotenv from "dotenv";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navigation from "./components/Navigation";
import Channel from "./components/Channel";
import VideoFeed from "./components/VideoFeed";
import { Container } from "reactstrap";

dotenv.config();

function App() {
	return (
		<main>
			<Navigation />
			<Container className="main-container">
				<Channel />
				<VideoFeed/>
			</Container>
		</main>
	);
}

export default App;
