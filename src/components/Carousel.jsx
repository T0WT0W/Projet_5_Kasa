import { useState } from "react";

const Carousel = ({ pictures }) => {

    const [currentPicture, setCurrentPicture] = useState(pictures[0]);
    const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

    return (<>
        <div className="carousel__container">
            {
                (pictures.length > 1) && <>
                    <span className="carousel__commands-left" onClick={() => {
                        let index = currentPictureIndex;

                        if ((index - 1) === -1) {
                            index = pictures.length;
                        }

                        setCurrentPictureIndex(i => index - 1)
                        setCurrentPicture(c => pictures[index - 1])
                    }}>&lt;</span>
                    <span className="carousel__commands-right" onClick={() => {
                        let index = currentPictureIndex;

                        if (index + 1 >= pictures.length) {
                            index = -1;
                        }

                        setCurrentPictureIndex(i => index + 1)
                        setCurrentPicture(c => pictures[index + 1])
                    }}>&gt;</span>
                </>
            }
            <span className="carousel__img-number">{currentPictureIndex + 1}/{pictures.length}</span>
            <img className="carousel__img" src={currentPicture} alt="" />
        </div>
    </>)
}

export default Carousel;