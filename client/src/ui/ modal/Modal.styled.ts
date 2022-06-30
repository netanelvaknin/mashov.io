import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #808080eb;
`;

export const InnerContent = styled.div`
  background: ${({theme}) => theme.palette.common.white};
  width: 50rem;
  height: 50rem;
  position: relative;
`;