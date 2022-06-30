import styled from 'styled-components/macro';

export const SelectContainer = styled.div<{error?: boolean}>`
  width: 27rem;
  height: 4rem;
  border: .2rem solid ${props => props.error ? props.theme.palette.error.main : props.theme.palette.common.black};
  border-radius: .4rem;
  cursor: pointer;
  ${props => props.error && `
    color: ${props.theme.palette.error.main};
  `};
`;

export const SelectField = styled.div`
  padding: 1rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const DropDown = styled.div<{isOpen: boolean}>`
  margin-top: 1rem;
  border-radius: 0.7rem;
  display: ${props => props.isOpen ? 'block' : 'none'};
  max-height: 19rem;
  overflow: auto;
  box-shadow: -4px 16px 17px -6px rgba(0,0,0,0.17);
`;

export const SelectItemWrapper = styled.div<{isSelected: boolean, error?: boolean}>`
  background: ${props => props.isSelected && props.theme.palette.primary.main};
  color: ${props => props.isSelected ? props.theme.palette.common.white : props.theme.palette.common.black};
  height: 2rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  &:hover {
    background: ${props => !props.isSelected && '#d6d6d63b'};
  }
`;

