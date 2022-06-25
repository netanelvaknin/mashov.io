import styled from 'styled-components';

export const TextFieldContainer = styled.div`
  max-width: 281px;
`;

export const Label = styled.label<{error: boolean}>`
  margin-bottom: 7px;
  display: block;
  color: ${props => props.error && props.theme.palette.error.primary};
`;

export const StyledInput = styled.input<{error: boolean}>`
  height: 40px;
  width: 270px;
  display: block;
  padding-right: 5px;
  font-size: 16px;
  color: ${props => props.error && props.theme.palette.error.primary};
  border: 2px solid ${props => props.error && props.theme.palette.error.primary};
  border-radius: 4px;
  outline: none;
`;

export const TextArea = styled.textarea<{error: boolean}>`
  width: 270px;
  height: 300px;
  display: block;
  padding-right: 5px;
  font-size: 16px;
  color: ${props => props.error && props.theme.palette.error.primary};
  border: 2px solid ${props => props.error && props.theme.palette.error.primary};
  border-radius: 4px;
  outline: none;
`;

export const HelperText = styled.div<{error: boolean}>`
  font-size: 13px;
  margin-top: 2px;
  color: ${props => props.error && props.theme.palette.error.primary};
`;