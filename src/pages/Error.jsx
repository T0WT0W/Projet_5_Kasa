import { useEffect } from "react"

const ErrorComponent = ({modifierPageActive}) => {

    useEffect(()=>{
        modifierPageActive(p=>null)
    })

    return (
        <div className="error">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
        </div>
    )
}

export default ErrorComponent