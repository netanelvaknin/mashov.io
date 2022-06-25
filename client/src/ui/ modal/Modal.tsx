import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom";
import {StyledModal} from "./Modal.styled";

interface ModalProps {
    open: boolean;
    onCloseModal: () => void;
}

export const Modal = ({open, onCloseModal}: ModalProps) => {
    useEffect(() => {
            const close = (e: any) => {
                if(e.keyCode === 27){
                    onCloseModal()
                }
            }
            window.addEventListener('keydown', close);
    }, []);

    if (open) {
        return ReactDOM.createPortal(
            <StyledModal className="mashov-modal">
                Content
            </StyledModal>,
            document.querySelector('body') as HTMLElement
        )
    }

    return null;
}

export default Modal;