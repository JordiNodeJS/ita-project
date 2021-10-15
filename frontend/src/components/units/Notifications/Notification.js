import React from "react";
import {NotificationStyled} from "./Notification.styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faExclamationCircle} from "@fortawesome/free-solid-svg-icons";

const Notification = ({message, isSuccess}) => {
	return (
		<NotificationStyled isSuccess={isSuccess}>
			<div className="color">
				<FontAwesomeIcon
					icon={isSuccess ? faCheckCircle : faExclamationCircle}
					style={{color: "white", width: "30px", height: "30px"}}
				/>
				<p>{message}</p>
			</div>

		</NotificationStyled>
	);
};

export default Notification;
