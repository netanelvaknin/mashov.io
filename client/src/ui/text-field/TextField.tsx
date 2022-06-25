import React, {ComponentPropsWithoutRef} from 'react';
import {HelperText, Label, StyledInput, TextArea, TextFieldContainer} from './TextField.styled';

export interface TextFieldProps extends ComponentPropsWithoutRef<"input"> {
    label: string;
    value: string;
    error?: boolean;
    className?: string;
    helperText?: string;
    multiLine?: boolean;
    placeholder?: string;
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

export const TextField = ({
  label,
  value,
  onChange,
  className,
  helperText,
  error = false,
  placeholder,
  multiLine = false
}: TextFieldProps) => {
    return (
        <TextFieldContainer className={className}>
            <Label error={error} htmlFor="mashov-textfield">{label}</Label>
            {multiLine ? (
                <TextArea value={value} placeholder={placeholder} id="mashov-textfield" error={error} autoComplete="off" onChange={onChange} />
            ) : (
                <StyledInput value={value} placeholder={placeholder} id="mashov-textfield" error={error} autoComplete="off" onChange={onChange} />
            )}
            <HelperText error={error}>{helperText}</HelperText>
        </TextFieldContainer>
    )
};

export default TextField;