import styled, {css} from 'styled-components';

const commonStyles = (error: boolean) => css`
  width: 27rem;
  display: block;
  padding-right: .5rem;
  font-size: 1.6rem;
  color: ${props => error && props.theme.palette.error.main};
  border: .2rem solid ${props => error && props.theme.palette.error.main};
  border-radius: .4rem;
  outline: none;
  background: transparent;
`;

export const TextFieldContainer = styled.div`
  max-width: 28.1rem;
`;

export const Label = styled.label<{error: boolean}>`
  margin-bottom: .7rem;
  display: block;
  color: ${props => props.error && props.theme.palette.error.main};
`;

export const StyledInput = styled.input<{error: boolean}>`
  ${props => commonStyles(props.error)};
  height: 4rem;
`;

export const TextArea = styled.textarea<{error: boolean}>`
  ${props => commonStyles(props.error)};
  height: 30rem;
`;