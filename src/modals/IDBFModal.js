import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

export default function IDBFModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);


    return (
        <div>
            <Button variant="primary" onClick={handleOpen}>
                <img src={require('../assets/img/idbf.jpg')} alt='campimg' className='modal-button' />
            </Button>

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Interdimensional Barfight</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                Interdimensional barfight is a fast paced card game where 4 players battle it out in barfight-themed chaos!
                    Quickly make friends with other patrons at the bar and use their abilities to your advantage!
                    The rights to develop <strong>Interdimensional Barfight</strong> were sold to a local game developer in Boulder, CO
                    <img src={require('../assets/img/idbf.jpg')} alt='campimg' className='modal-image' />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={handleClose}>
                        Learn More
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </div>
    )
}


