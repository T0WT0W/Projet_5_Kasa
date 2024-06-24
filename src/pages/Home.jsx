import { Link } from "react-router-dom"
import { useEffect } from "react"
import headband from "../assets/Headband.png"

const Home = ({ modifierPageActive, logements }) => {

    useEffect(() => {
        modifierPageActive(p => "Home")
    })

    return (<>
        <div className="headband">
            <h1 className="headband__title" >Chez vous, partout et ailleurs</h1>
        </div>

        <div className="card__container">
            {
                logements.map((logement, index) => {
                    return (
                        <Link key={index} to={"/housing/" + logement.id}>
                            <div className="card" style={logement.cover ? {
                                backgroundImage: `url(${logement.cover})`
                            } : {}}>
                                <h3 className="card__title">{logement.title}</h3>
                            </div>
                        </Link>

                    )
                })
            }
        </div>
    </>);
}

export default Home