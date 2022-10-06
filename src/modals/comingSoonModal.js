import Button from 'react-bootstrap/Button';
import React from 'react';

export default function ComingSoon() {
    return (
        <div>
            <Button variant="primary">
                <img src={require('../assets/img/comingSoon.jpg')} alt='campimg' className='modal-button' />
            </Button>
        </div>
    )
}


