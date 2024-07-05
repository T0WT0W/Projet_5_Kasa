import { useEffect } from "react"

import ErrorComponent from "../components/ErrorComponent"

const Error = ({ modifierPageActive }) => {

    useEffect(() => {
        modifierPageActive(p => null)
    })

    return (
        <ErrorComponent />
    )
}

export default Error