import React, {useEffect} from 'react';
import ReactDOM from "react-dom";
import {InnerContent, StyledModal} from "./Modal.styled";

interface ModalProps {
    open: boolean;
    children?: React.ReactNode;
    className?: string;
    onCloseModal: () => void;
}

export const Modal = ({open, className, children, onCloseModal}: ModalProps) => {
    useEffect(() => {
            const close = (e: KeyboardEvent) => {
                const { key } = e;

                if(key === 'Escape'){
                    onCloseModal()
                }
            }
            window.addEventListener('keydown', close);
    }, [onCloseModal]);

    if (open) {
        return ReactDOM.createPortal(
            <StyledModal
                className={className}
                role="dialog"
                id="mashov-modal"
                aria-label="a dialog. to close press escape key"
                onClick={onCloseModal}
            >
                <InnerContent
                    className="mashov-modal__inner-content"
                    onClick={(e) => e.stopPropagation()}>
                    {children}
                </InnerContent>
            </StyledModal>,
            document.querySelector('body') as HTMLElement
        )
    }

    return null;
}

export default Modal;