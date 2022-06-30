import React from 'react';
import styled from 'styled-components';

export interface MenuItemProps {
    value: string | number;
    children: React.ReactNode;
}

const StyledMenuItem = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const MenuItem = ({children}: MenuItemProps) => {
    return (
        <StyledMenuItem id="menu-item-mashov">{children}</StyledMenuItem>
    )
}

export default MenuItem;