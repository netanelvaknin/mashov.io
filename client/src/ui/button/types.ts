import React, {ComponentPropsWithoutRef} from "react";

export type ButtonVariants = 'contained' | 'outlined';

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
    variant: ButtonVariants;
    children: React.ReactNode;
    href?: string;
    className?: string;
    onClick?: () => void;
}