import React, {useState} from "react";
import {StyledPrice, StyledP} from "./AdCard.style.js";
import {faComments} from "@fortawesome/free-solid-svg-icons";
import Button from "components/units/Button/Button";
import Colors from "theme/Colors";
import Card from "components/composed/Card/Card";
import ContactModal from "components/composed/ContactModal/ContactModal.js";

const AdCard = ({id, image, title, price, surface, includedExpenses, description, rooms}) => {
	const [active, setActive] = useState(false);
	console.log("id" + id);
	return (
		<Card
			image={image}
			title={title}
			description={
				<>
					<StyledPrice>{`${price} €/mes`}</StyledPrice>
					<StyledP>{`${rooms} habitaciones`}</StyledP>
					<StyledP>{`${surface} m\u00B2`}</StyledP>
					<StyledP>
						{includedExpenses ? "Gastos incluidos" : "Gastos no incluidos"}
					</StyledP>
				</>
			}
			text={description}
			footer={
				<>
					<Button
						buttonStyles={{
							display: "flex",
							alignItems: "center",
							width: "7.5rem",
							height: "2.2rem",
							marginTop: "auto",
							fontSize: "1.125rem",
							fontFamily: "Arial",
							color: Colors.strongBlue,
							background: "transparent",
							boxShadow: "none",
							paddingLeft: "0",
							outline: "none",
						}}
						text="Contactar"
						type="button"
						icon={faComments}
						iconPosition="left"
						iconStyles={{
							marginRight: 5,
							paddingLeft: 0,
						}}
						onClick={() => setActive(true)}
					/>
					<ContactModal id={id} active={active} hideModal={() => setActive(false)} />
				</>
			}
		/>
	);
};
export default AdCard;
