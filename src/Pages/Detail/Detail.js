import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DetailModel from './DetailModel';

function Detail() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <i class='bx bx-plus icon' onClick={() => setModalShow(true)} ></i>
            {/* <i class='bx bx-plus icon'></i> */}


            <DetailModel
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

        </>
    )
}

export default Detail