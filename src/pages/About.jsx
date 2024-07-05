import { useEffect } from "react";
import Collapsible from "../components/Collapsible";

import headband2 from "../assets/Headband2.png";

const About = ({ modifierPageActive }) => {
	useEffect(() => {
		modifierPageActive((p) => "About");
	});

	return (
		<>
			<div
				className="headband"
				style={{
					backgroundImage: `url(${headband2})`,
				}}
			></div>

			<div className="collapsible__container-flex">
				<Collapsible title="Fiabilité">
					Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
				</Collapsible>

				<Collapsible title="Respect">
					La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
				</Collapsible>

				<Collapsible title="Service">
					La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.

				</Collapsible>

				<Collapsible title="Sécurité">
					La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
				</Collapsible>
			</div>
		</>
	);
};

export default About;
