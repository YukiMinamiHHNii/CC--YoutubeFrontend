import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export const VideoModal = ({ isOpen, trigger, video }) => {
	return (
		<Modal isOpen={isOpen} toggle={trigger}>
			<ModalHeader>Video</ModalHeader>
			<ModalBody>
				<iframe
					height="315"
					src={`https://www.youtube.com/embed/${video}`}
					frameBorder="0"
					allowFullScreen
					title={video}
				/>
			</ModalBody>
			<ModalFooter>
				<input
					className="form-control"
					type="submit"
					value="Close"
					onClick={trigger}
				/>
			</ModalFooter>
		</Modal>
	);
};
