import Select from '../Select';
import {fireEvent, render, screen} from '@testing-library/react';
import {ThemeProvider} from "styled-components";
import theme from '../../../theme';
import MenuItem from "../menu-item/MenuItem";

const mockView = (
    <ThemeProvider theme={theme}>
        <Select value={1} onChange={jest.fn()}><MenuItem value={1}>1</MenuItem></Select>
    </ThemeProvider>
);

describe('Button', function () {
    it('should render correctly', () => {
        render(mockView);
        expect(screen.getByTestId('select-mashov')).toBeInTheDocument();
    });

    it('should close the select if the dropdown is open and there was click outside', () => {
        render(<ThemeProvider theme={theme}>
            <div data-testid="some-div">click me</div>
            <Select value={1} onChange={jest.fn()}>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
            </Select>
        </ThemeProvider>);

        const select = screen.getByTestId('select-mashov');
        fireEvent.click(select);

        const dropdown = screen.getByTestId('select-dropdown');
        expect(dropdown).toBeVisible();

        const someDiv = screen.getByTestId('some-div');
        fireEvent.click(someDiv);
        expect(dropdown).not.toBeVisible();
    });

    it('should show label instead value', () => {
        render(<ThemeProvider theme={theme}>
            <Select value="" label="Please select one" onChange={jest.fn()}>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
            </Select>
        </ThemeProvider>);

        expect(screen.getByText(/please select one/i)).toBeInTheDocument();
    });

    it('should use the error color for select container when error prop is true', () => {
        render(<ThemeProvider theme={theme}>
            <Select error value="" label="Please select one" onChange={jest.fn()}>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
            </Select>
        </ThemeProvider>);

        expect(screen.getByTestId('select-container')).toHaveStyle(`border: .2rem solid ${theme.palette.error.main}`)
    });

    it('should trigger change handler when choosing item', () => {
        const changeHandlerMock = jest.fn();
        render(<ThemeProvider theme={theme}>
            <Select value={1} onChange={changeHandlerMock}>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
            </Select>
        </ThemeProvider>);

        const select = screen.getByTestId('select-mashov');
        fireEvent.click(select);

        const dropdown = screen.getByTestId('select-dropdown');
        expect(dropdown).toBeVisible();

        fireEvent.click(screen.getByText(/3/));
        expect(changeHandlerMock).toHaveBeenCalled();
    });

    it('should select item when pressing tab', () => {
        const changeHandlerMock = jest.fn();
        render(<ThemeProvider theme={theme}>
            <Select value={1} onChange={changeHandlerMock}>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
            </Select>
        </ThemeProvider>);

        const select = screen.getByTestId('select-mashov');
        fireEvent.click(select);

        const dropdown = screen.getByTestId('select-dropdown');
        expect(dropdown).toBeVisible();

        const selectItem = screen.getAllByTestId('select-item')[2];
        selectItem.focus();
        expect(selectItem).toHaveFocus();
        fireEvent.keyPress(selectItem, {key: 'Enter', code: 'Enter', charCode: 13});
        expect(changeHandlerMock).toHaveBeenCalled();
    });

    it('should throw an error when select have different children and not MenuItem component', () => {
        let actualErrorMsg;
        try {
            render(<ThemeProvider theme={theme}>
                <Select value={1} onChange={jest.fn()}>
                    <div>This is not allowed</div>
                </Select>
            </ThemeProvider>);

            const select = screen.getByTestId('select-mashov');
            fireEvent.click(select);
        } catch(e: any) {
            actualErrorMsg = e.message;
        }

        expect(actualErrorMsg).toBe('Only MenuItem allowed as children of Select component');
    });

    it('should throw an error when select have different component as children', () => {
        let actualErrorMsg;
        const SomeComp = () => <div>Testing</div>
        try {
            render(<ThemeProvider theme={theme}>
                <Select value={1} onChange={jest.fn()}>
                    <SomeComp />
                </Select>
            </ThemeProvider>);

            const select = screen.getByTestId('select-mashov');
            fireEvent.click(select);
        } catch(e: any) {
            actualErrorMsg = e.message;
        }

        expect(actualErrorMsg).toEqual('Only MenuItem allowed as children of Select component');
    });
});