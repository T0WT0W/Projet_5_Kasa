import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

import star from "../assets/star.png";
import starPink from "../assets/star-pink.png";


const Housing = ({logements}) => {

    const { houseId } = useParams();
    const [logement, setLogement] = useState(null);
    const [error, setError] = useState(false);
    
    const [pictures, setPictures] = useState([]);
    const [currentPicture, setCurrentPicture] = useState(null);
    const [currentPictureIndex, setCurrentPictureIndex] = useState(0);


    useEffect(()=>{
        var currentLogement = logements.filter((item)=>{
            if(item.id === houseId){
                return true;
            }

            return false;
        })[0]

        setLogement(l => currentLogement)

        if (currentLogement === undefined) {
            setError(e=>true);
        } else {
            setError(e=>false);
            setPictures(p=>currentLogement.pictures)
            setCurrentPicture(c=>currentLogement.pictures[0])
        }
        
    }, [logements, houseId])
    
    console.log(logement)
    
    var rating = [];

    if (logement !== null && logement !== undefined) {
        for (let u = 0; u < logement.rating; u++) {
            rating.push(<img alt="" src={starPink}/>)
        }
        if (rating.length !== 5) {
            for (let u = 0; u < (5 - logement.rating); u++) {
                rating.push(<img alt="" src={star}/>)
            }
        }
    }

    return (
        <>
        {
            (error === true) ? 
            <>
                <div className="error">
                    <h1>404</h1>
                    <h2>Oups! La page que vous demandez n'existe pas.</h2>
                </div>
            </> : 
            <div className="Housing">
                {
                    (logement === null || logement === undefined) ? 
                    <>
                        <span className="loader">Chargement en cours...</span>
                    </> : 
                    <>
                        <div className="carousel__container">
                            {
                                (pictures.length > 1) && <>
                                    <span className="carousel__commands-left" onClick={()=>{
                                        let index = currentPictureIndex;

                                        if ((index - 1) === -1) {
                                            index = pictures.length;
                                        }

                                        setCurrentPictureIndex(i=>index - 1)
                                        setCurrentPicture(c=>logement.pictures[index - 1])
                                    }}>&lt;</span>
                                    <span className="carousel__commands-right" onClick={()=>{
                                        let index = currentPictureIndex;

                                        if (index + 1 >= pictures.length) {
                                            index = -1;
                                        }

                                        setCurrentPictureIndex(i=>index + 1)
                                        setCurrentPicture(c=>logement.pictures[index + 1])
                                    }}>&gt;</span>
                                </>
                            }
                            <img className="carousel__img" src={currentPicture} alt="" />
                        </div>

                        <div className="houseTitle">
                            <div>
                                <h1>{logement.title}</h1>
                                <span>{logement.location}</span>
                                <div className="tags__container">
                                    {
                                        logement.tags.map((t)=><div className="tag">{t}</div>)
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
                        
                    </>
            
                }
            </div>
        }
        </>
    )
}

export default Housing