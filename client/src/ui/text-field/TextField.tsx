import React, {ComponentPropsWithoutRef} from 'react';
import {HelperText, Label, StyledInput, TextArea, TextFieldContainer} from './TextField.styled';

export interface TextFieldProps extends ComponentPropsWithoutRef<"input"> {
    label: string;
    value: string;
    error?: boolean;
    className?: string;
    helperText?: string;
    multiLine?: boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const TextField = ({label, value, onChange, className, helperText, error = false, multiLine = false}: TextFieldProps) => {
    return (
        <TextFieldContainer className={className}>
            <Label error={error} htmlFor="mashov-textfield">{label}</Label>
            {multiLine ? (
                <TextArea value={value} id="mashov-textfield" error={error} autoComplete="off" onChange={onChange} />
            ) : (
                <StyledInput value={value} id="mashov-textfield" error={error} autoComplete="off" onChange={onChange} />
            )}
            <HelperText error={error}>{helperText}</HelperText>
        </TextFieldContainer>
    )
};

export default TextField;