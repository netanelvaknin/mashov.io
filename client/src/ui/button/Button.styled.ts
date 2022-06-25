import styled, {css} from 'styled-components';
import {ButtonProps, ButtonVariants} from './types';

const commonStyles = css`
  cursor: pointer;
  outline: none;
  font-size: 1.6rem;
`;

const containedStyles = css`
  background: ${props => props.theme.palette.primary.main};
  color: white;
  ${commonStyles};
  border: 0;
  border-radius: .4rem;
  padding: .5rem;
  width: 12rem;
  height: 4rem;
`;

const outlinedStyles = css`
  background: transparent;
  color: ${props => props.theme.palette.primary.main};
  border: .2rem solid ${props => props.theme.palette.primary.main};
  ${commonStyles};
  border-radius: .4rem;
  padding: .5rem;
  width: 12rem;
  height: 4rem;
`;

const linkStyles = css`
  &,
  &:hover,
  &:active,
  &:visited {
    font-size: 1.6rem;
    color: ${props => props.theme.palette.primary.main};
  }
`;

const getButtonStyling = (variant: ButtonVariants, href?: string) => {
    if (href) {
        return linkStyles;
    }

    switch(variant) {
        case 'contained':
            return containedStyles;
        case "outlined":
            return outlinedStyles;
    }
}

export const StyledButton = styled.button<ButtonProps>`
  ${props => getButtonStyling(props.variant, props.href)}
`;