import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

export default function SpookedModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <div>
            <Button variant="primary" onClick={handleOpen}>
                <img src={require('../assets/img/spooked.png')} alt='campimg' className='modal-button' />
            </Button>

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>The Tinycade</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    'Spooked' is a multiplayer couch co-op game focused on teamwork
                    and emergent player experiences where you and your
                    team of amateur ghost hunters travel to a haunted
                    island to catch some pesky ghosts.
                    Inspired by the spookiness and goofs of <i>'Luigi's
                        Mansion'</i> and the chaotic multiplayer cooperation
                    of <i>'Overcooked'</i>, players will be delighted to chase
                    and be chased by the ghosts in Spooked!
                    <br/>
                    <br/>
                    <strong>My role</strong>
                    <p>While working on 'Spooked', I was responsible for a number of roles.
                        I was the development lead for the project, and managed the majority
                        of the code base. This included player controls, game mechanics and dynamics, and menu navigation.
                        In addition, I also was responsible for coding the animations, vfx, and navigation for game objects.
                    </p>
                    <p><strong>Spooked</strong> was accepted to be listed on the Nintendo switch store in 2021</p>
                    <img src={require('../assets/img/spooked.png')} alt='campimg' className='modal-image' />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => openInNewTab('https://z-sheikh.itch.io/spooked')}>
                        Learn More
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


