import { useState } from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);


    function deleteHandler() {
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
                <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
            {modalIsOpen && <Modal onConfirm={closeModalHandler} onCancel={closeModalHandler} />}
            {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
        </div>
    )
}

export default Todo; // makes useable outside this file. Make sure components start with capital letters. 
// Anything in react in curl brackets {} will be read as javascript code and not just plain text

// {modalIsOpen && <Modal />}  -> an object statement is always true, and will be executed in this statement if whole statement is true
