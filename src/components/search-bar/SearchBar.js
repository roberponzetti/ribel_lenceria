import React, { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import '../../styles.css';
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap';
import { ProductContext } from '../../context/ProductContext'

const SearchBar = () => {

    const {filterProducts} = useContext(ProductContext);
    const [searchInput, setSearchInput] = useState('')
    
    const handleOnChange = (event) => {
        setSearchInput(event.target.value);
        console.log(searchInput);
    }

    const handleOnClick = () => {
        filterProducts(searchInput);
        document.getElementById("searchBar").value = '';
    };
    return (
        <Form className="search-form" >
            <Form.Group>
                <InputGroup>
                    <FormControl id="searchBar" type="search" autoComplete="off" placeholder="Buscar por categoría..." 
                                 className="search-bar" onChange={handleOnChange} />
                    <Button className="search-button" onClick={handleOnClick}><FontAwesomeIcon className="glassColor" icon={faMagnifyingGlass} /></Button>
                </InputGroup>
            </Form.Group>
        </Form>
    )
}

export default SearchBar
