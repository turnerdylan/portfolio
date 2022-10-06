import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

export default function CampingModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <div>
            <Button variant="primary" onClick={handleOpen}>
                <img src={require('../assets/img/camping.png')} alt='campimg' className='modal-button' />
            </Button>

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>The Camping Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    The Camping project is an online tool for uploading and reviewing campgrounds, similar to yelp or something like AllTrails.
                    <br/>
                    <br/>
                    It was created throuh a mix of tools and technologies and is uploaded on the web.
                    Go check it out and add some campgrounds!
                    <br/>
                    <br/>
                    <img src={require('../assets/img/camping.png')} alt='campimg' className='modal-image'/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => openInNewTab('https://thecampingproject.herokuapp.com/')}>
                        Learn more
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


