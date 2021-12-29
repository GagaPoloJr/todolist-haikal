import React from 'react';
import ReactDOM from 'react-dom';
import ModalContent from './modalContent';

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(

    <React.Fragment>
    <ModalContent 
        onclick={hide} />
    </React.Fragment>, document.body


) : null;

export default Modal;