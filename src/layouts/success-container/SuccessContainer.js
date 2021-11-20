import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import '../../styles.css';

const SuccessContainer = ({params}) => {
    return (
        <div class="container alert alert-success mt-5" role="alert">
            <FontAwesomeIcon className="circle-check" icon={faCircleCheck} />
            <h4 class="mt-2 alert-heading">¡Muchas gracias por su compra!</h4>
            <p>Su compra se ha generado con el siguiente id: {params}</p>
            <hr />
            <p class="mb-0">Recibirá un correo electrónico con su recibo de pago.</p>
        </div>
    )
}

export default SuccessContainer
