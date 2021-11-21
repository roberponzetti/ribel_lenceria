import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import '../../styles.css';
import { Form, FormControl, InputGroup } from 'react-bootstrap';

function SearchWidget() {
    return (
        <Form className="search-form" >
            <Form.Group>
                <InputGroup>
                    <InputGroup.Text>
                    <FontAwesomeIcon className="glassColor" icon={faMagnifyingGlass} />
                    </InputGroup.Text>
                    <FormControl
                        type="search"
                        placeholder="Buscar productos..."
                        className="search-bar"
                    />
                </InputGroup>
            </Form.Group>
        </Form>
    )
}

export default SearchWidget
