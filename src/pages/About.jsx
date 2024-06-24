import { useEffect } from "react"

const About = ({modifierPageActive}) => {

    useEffect(()=> {
        modifierPageActive(p=>"About")
    })

    return (
        <div className="About">
            À Propos
        </div>
    )
}

export default About