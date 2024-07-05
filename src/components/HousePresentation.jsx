
import Collapsible from "./Collapsible";
import Carousel from "./Carousel";

import star from "../assets/star.png";
import starPink from "../assets/star-pink.png";

const HousePresentation = ({ logement }) => {

    var rating = [];

    if (logement !== null && logement !== undefined) {
        for (let u = 0; u < logement.rating; u++) {
            rating.push(<img alt="" src={starPink} key={u} />)
        }
        if (rating.length !== 5) {
            for (let u = 0; u < (5 - logement.rating); u++) {
                rating.push(<img alt="" className="grey" src={star} key={u + logement.rating} />)
            }
        }
    }

    return (<>
        <Carousel pictures={logement.pictures} />

        <div className="houseTitle">
            <div>
                <h1>{logement.title}</h1>
                <span>{logement.location}</span>
                <div className="tags__container">
                    {
                        logement.tags.map((t, id) => <div className="tag" key={id}>{t}</div>)
                    }
                </div>
            </div>
            <div className="houseTitle__right">

                <div className="host__container">
                    <span className="host__name">{logement.host.name}</span>
                    <div className="host__avatar" style={logement.host.picture ? {
                        backgroundImage: `url(${logement.host.picture})`
                    } : {}}></div>
                </div>
                <div className="rating">
                    {rating}
                </div>
            </div>
        </div>

        <div className="house__collapsibles">
            <Collapsible title="Description">
                {logement.description}
            </Collapsible>
            <Collapsible title="Équipements">
                <ul>
                    {logement.equipments.map((e, id) => <li key={id}>{e}</li>)}
                </ul>
            </Collapsible>
        </div>
    </>)
}

export default HousePresentation;