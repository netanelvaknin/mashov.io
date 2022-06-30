import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {useClickOutside} from "hooks";
import {DropDown, SelectContainer, SelectField, SelectItemWrapper} from './Select.styled';
import {HelperText} from '../../styled';

interface SelectProps {
    className?: string;
    value: string | number;
    label?: string;
    children: React.ReactNode;
    error?: boolean;
    helperText?: string;
    onChange: (value: any) => void;
}

export const Select = ({
   value,
   label,
   children,
   className,
   onChange,
   error = false,
   helperText
}: SelectProps) => {
    const [showItems, setShowItems] = useState<boolean>(false);

    const ref = useClickOutside((): void => {
        if (showItems) {
            setShowItems(false);
        }
    });

    const handleChange = (value: string | number): void=> {
        onChange(value);
        setShowItems(false);
    };

    const handleKeyPress = (e: React.KeyboardEvent, value: string | number): void => {
        e.key === 'Enter' && handleChange(value);
    }

    return (
        <SelectContainer data-testid="select-container" id="select-mashov" className={className} ref={ref} error={error}>
            <SelectField data-testid="select-mashov" onClick={() => setShowItems(!showItems)}>{value || label}</SelectField>

            <DropDown data-testid="select-dropdown" id="dropdown-select-mashov" isOpen={showItems}>
                {showItems && ReactDOM.createPortal(React.Children.map(children, (child, childIndex) => {
                        if (React.isValidElement(child) && typeof child.type === 'function') {
                            const childValue = child.props.value;
                            const componentName = child.type.name;

                            if (componentName === 'MenuItem') {
                                return (
                                    <SelectItemWrapper
                                        error={error}
                                        data-testid="select-item"
                                        tabIndex={0}
                                        isSelected={value === childValue}
                                        onClick={() => handleChange(childValue)}
                                        onKeyPress={(e) => handleKeyPress(e, childValue)}
                                    >
                                        {child}
                                    </SelectItemWrapper>
                                );
                            }

                            throw new Error('Only MenuItem allowed as children of Select component');
                        }

                        throw new Error('Only MenuItem allowed as children of Select component');
                }), document.getElementById('dropdown-select-mashov') as HTMLElement)}
            </DropDown>
            <HelperText error={error}>{helperText}</HelperText>
        </SelectContainer>
    );
};

export default Select;