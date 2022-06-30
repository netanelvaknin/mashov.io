import React from 'react';

export interface MenuItemProps {
    value: string | number;
    children: React.ReactNode;
}

export const MenuItem = ({value, children}: MenuItemProps) => {
    return (
        <div tabIndex={0} id="menu-item-mashov">{children}</div>
    )
}

export default MenuItem;