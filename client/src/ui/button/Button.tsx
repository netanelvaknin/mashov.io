import React from 'react';
import {StyledButton} from './Button.styled';
import {ButtonProps} from './types';

export const Button = ({
    variant,
    children,
    href,
    className,
    onClick
}: ButtonProps) => {
    return (
        <StyledButton
            variant={variant}
            className={className}
            as={href ? "a" : "button"}
            role={href ? "link" : "button"}
            href={href}
            target="_blank"
            onClick={onClick}
        >
            {children}
        </StyledButton>
    )
};

export default Button;