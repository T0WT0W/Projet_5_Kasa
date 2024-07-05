import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ErrorComponent from "../components/ErrorComponent";
import HousePresentation from "../components/HousePresentation";

const Housing = ({ logements, modifierPageActive }) => {

    const { houseId } = useParams();
    const [logement, setLogement] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        modifierPageActive(p => "Housing")
    })

    useEffect(() => {
        var currentLogement = logements.filter((item) => {
            if (item.id === houseId) {
                return true;
            }

            return false;
        })[0]

        setLogement(l => currentLogement)

        if (currentLogement === undefined) {
            setError(e => true);
        } else {
            setError(e => false);
        }

    }, [logements, houseId])


    return (
        <>
            {
                (error === true) ?
                    <ErrorComponent /> :
                    <div className="Housing">
                        {
                            (logement === null || logement === undefined) ?
                                <>
                                    <span className="loader">Chargement en cours...</span>
                                </> :
                                <HousePresentation logement={logement} />

                        }
                    </div>
            }
        </>
    )
}

export default Housing