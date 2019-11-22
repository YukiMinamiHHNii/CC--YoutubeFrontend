import React from "react";
import { Form, FormGroup, Label, Input, CustomInput, Row } from "reactstrap";

const INITIAL_STATE = { term: null, maxResults: null, page: null };

class Search extends React.Component {
	state = { ...INITIAL_STATE };
	onChange = e => {
		let target = e.target.name,
			value = e.target.value;
		this.setState({ [target]: value });
	};
	onSearch = e => {
		e.preventDefault();
		return this.props.onSearch({ ...this.state });
	};
	onPagination = (e, type) => {
		e.preventDefault();
		return this.props.onSearch({ ...this.state, page: type });
	};
	render() {
		return (
			<div className="col-sm-12 mb-3">
				<Form inline className="col-sm-12">
					<FormGroup className="col-sm-12">
						<Label for="name" className="col-sm-12 col-md-3">
							Search video:
						</Label>
						<Input
							type="text"
							name="term"
							className="col-sm-12 col-md-7"
							onChange={this.onChange}
						/>
						<div className="col-sm-12 col-md-2 d-flex flex-row justify-content-end justify-content-md-center">
							<Input type="submit" value="Search" onClick={this.onSearch} />
						</div>
						<div className="col-sm-12 col-md-4 d-flex justify-content-md-center">
							<CustomInput
								type="switch"
								id="columnSwitch"
								label="Activate four column mode"
								onChange={this.props.onExtend}
							/>
						</div>
						<div className="col-sm-12 col-md-4">
							<Row>
								{typeof this.props.prev !== "undefined" &&
									this.props.prev !== null && (
										<div className="col-md-6 d-flex justify-content-md-center">
											<Input
												type="submit"
												value="Previous"
												onClick={e => this.onPagination(e, this.props.prev)}
											/>
										</div>
									)}
								{typeof this.props.next !== "undefined" &&
									this.props.next !== null && (
										<div className="col-md-6 d-flex justify-content-md-center">
											<Input
												type="submit"
												value="Next"
												onClick={e => this.onPagination(e, this.props.next)}
											/>
										</div>
									)}
							</Row>
						</div>
						<div className="col-sm-12 col-md-4 d-flex flex-wrap">
							<Label className="col-md-6" for="maxResults">
								# of results
							</Label>
							<Input
								className="col-md-6"
								name="maxResults"
								type="select"
								onChange={this.onChange}
							>
								<option value={10}>10</option>
								<option value={20}>20</option>
								<option value={30}>30</option>
								<option value={40}>40</option>
								<option value={50}>50</option>
							</Input>
						</div>
					</FormGroup>
				</Form>
			</div>
		);
	}
}

export default Search;
