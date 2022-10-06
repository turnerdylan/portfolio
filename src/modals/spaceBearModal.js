import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

export default function SpaceBearModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <div>
            <Button variant="primary" onClick={handleOpen}>
                <img src={require('../assets/img/spacebears.png')} alt='campimg' className='modal-button' />
            </Button>

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>A Space Bear Adventure</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <i>'Space Bear Adventure'</i> is a Co-Op Multiplayer Puzzle Adventure!
                    <br/>
                    <br/>
                    With the help of some friends, your fellow animal astronauts, and your trusty
                    physics-altering musical instruments you must find your way through each room
                    of your crashed spaceship to assess the damage. Will it be the Time-Halting-Trumpet
                    that frees you from the room or the Sizing-Sazophone that saves the day? Players
                    will need to combine both their wits and some sick beats to get out of this one.
                    <br/>
                    <br/>
                    I was development lead for this game did all the programming and some level design.
                    <br/>
                    <br/>
                    <img src={require('../assets/img/spaceBearsGame.png')} alt='campimg' className='modal-image' />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => openInNewTab('https://vimeo.com/405922467')}>
                        Learn More
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


