import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

export default function TinycadeModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <div>
            <Button variant="primary" onClick={handleOpen}>
                <img src={require('../assets/img/tinycade.jpg')} alt='campimg' className='modal-button' />
            </Button>

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>The Tinycade</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Tinycade is a small arcade that enables games to be played through the use of just a cell phone and simple household items.
                    <br/>
                    <br/>
                    The platform is designed to support game designers
                    in making Alt Ctrl (alternative controller) games in which
                    the interface can be easily fabricated by hand. Players can
                    build the alternative controllers themselves with everyday
                    materials, such as cardboard, toothpicks and rubber bands.
                    Tinycade uses computer vision and simple crafting approaches
                    to make this platform accessible to as many players and
                    designers as possible.
                    <br/>
                    <br/>
                    <strong>My role</strong>
                    <p>While working on the Tinycade, I was responsible for both the
                        creation of games and the creation of controllers. I designed
                        and built a local competitive game called
                        <i> Cyber Hockey</i> that used magnetic markers as game
                        controllers. I also developed a number of 'generic' computer vision inputs such as buttons,
                        sliders, and even a dual joystick controller!
                    </p>
                    <img src={require('../assets/img/tinycade.jpg')} alt='campimg' className='modal-image' />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => openInNewTab('https://tinycade.github.io/tinycade-homepage/')}>
                        Learn More
                    </Button>
                    <Button variant="primary" onClick={() => openInNewTab('https://www.colorado.edu/atlas/tinycade')}>
                        Research
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


