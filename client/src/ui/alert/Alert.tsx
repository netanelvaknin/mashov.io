import React, {useEffect} from 'react';
import ReactDOM from "react-dom";
import {StyledAlert} from "./Alert.styled";

interface AlertProps {
    open: boolean;
    className?: string;
    children?: React.ReactNode;
    onAlertClose?: () => void;
    closeAfter?: number;
}

export const Alert = ({open, children, className, onAlertClose, closeAfter}: AlertProps) => {
    useEffect(() => {
        if (closeAfter && !onAlertClose) {
            throw new Error('Cannot use prop closeAfter without using onAlertClose prop')
        }

        if (open && closeAfter) {
            setTimeout(() => {
                onAlertClose && onAlertClose();
            }, closeAfter)
        }
    }, [open, closeAfter, onAlertClose]);

    if (open) {
        return ReactDOM.createPortal(
            <StyledAlert
                className={className}
                id="mashov-alert"
                data-testid="mashov-alert"
                onClick={onAlertClose}
            >
                <div onClick={onAlertClose}>
                    close
                </div>
                {children}
            </StyledAlert>,
            document.querySelector('body') as HTMLElement
        )
    }

    return null;
};

export default Alert