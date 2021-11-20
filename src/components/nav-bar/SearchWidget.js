import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import '../../styles.css';

function SearchWidget() {
    return (
        <FontAwesomeIcon className="glassColor" icon={faMagnifyingGlass} />
    )
}

export default SearchWidget
