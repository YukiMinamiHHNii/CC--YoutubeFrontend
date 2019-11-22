import axios from "axios";

export const getChannelInfo = () => {
	return axios
		.get(`${process.env.REACT_APP_API_ENDPOINT}/channel`)
		.then(response => {
			return !response.data.hasOwnProperty("status")
				? response.data.items[0].snippet
				: Promise.reject({ ...response });
		})
		.catch(error => {
			return Promise.reject({ error });
		});
};

export const getVideoList = ({ term, maxResults, page }) => {
	return axios
		.get(`${process.env.REACT_APP_API_ENDPOINT}/video`, {
			params: {
				term,
				maxResults,
				page
			}
		})
		.then(response => {
			console.log(response.data)
			return !response.data.hasOwnProperty("status")
				? response.data
				: Promise.reject({ ...response });
		})
		.catch(error => {
			return Promise.reject({ error });
		});
};
