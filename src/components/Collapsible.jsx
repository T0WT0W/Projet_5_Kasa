import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react'

const Collapsible = ({ title, children }) => {

    const [active, setActive] = useState(false)

    return (
        <>
            <div className="collapsible">
                <div className={active ? "collapsible__header active" : "collapsible__header"}>{title} <FontAwesomeIcon icon={faChevronDown} onClick={e => setActive(a => !active)} /></div>

                <div className={active ? "collapsible__content active" : "collapsible__content"}>{children}</div>
            </div>
        </>
    )
}

export default Collapsible;