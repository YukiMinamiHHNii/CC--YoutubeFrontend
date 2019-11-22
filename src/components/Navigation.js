import React from "react";
import {
	Collapse,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Nav,
	NavItem,
	NavLink,
	Container
} from "reactstrap";

class Navigation extends React.Component {
	state = { isOpen: false };

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};
	render() {
		return (
			<Navbar className="highlight" expand="md">
				<Container>
					<NavbarBrand>Youtube Frontend</NavbarBrand>
					<NavbarToggler className="toggler" onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="https://github.com/YukiMinamiHHNii/CC--YoutubeFrontend">
									GitHub
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		);
	}
}

export default Navigation;
