import { useState } from 'react';

import BioModal from './BioModal';
import Backdrop from './Backdrop';

function Bio() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function viewHandler() {
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    return (
        <div className='card'>
            <h2>Who am I?</h2>

            <button className='btn' onClick={viewHandler}>View</button>
            {modalIsOpen && <BioModal onClose={closeModalHandler} />}
            {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
        </div>
    )
}

export default Bio;