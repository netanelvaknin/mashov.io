import TextField from '../TextField';
import {render, screen} from '@testing-library/react';
import {ThemeProvider} from "styled-components";
import theme from '../../../theme';

const mockView = (
    <ThemeProvider theme={theme}>
        <TextField label="test" value="test" onChange={jest.fn()} />
    </ThemeProvider>
)
describe('TextField', function () {
    it('should render correctly', () => {
        render(mockView);
        expect(screen.getByLabelText('test')).toBeInTheDocument();
    });

    it('should render multiline textfield', () => {
        render(<ThemeProvider theme={theme}><TextField multiLine value="testing" onChange={jest.fn()} label="שם משתמש" /></ThemeProvider>);
        expect(screen.getByLabelText('שם משתמש')).toHaveStyle('height: 30rem;');
    });

    it('should have error color when having error prop true', () => {
        render(<ThemeProvider theme={theme}>
            <TextField error value="testing" onChange={jest.fn()} label="test" />
        </ThemeProvider>);
        expect(screen.getByLabelText('test')).toHaveStyle(`color: ${theme.palette.error.main}`);

    })
});