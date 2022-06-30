import Button from '../Button';
import {render, screen} from '@testing-library/react';
import {ThemeProvider} from "styled-components";
import theme from '../../../theme';

const mockView = (
    <ThemeProvider theme={theme}>
        <Button variant="contained">לחץ כאן</Button>
    </ThemeProvider>
);

describe('Button', function () {
    it('should render correctly', () => {
        render(mockView);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should render a link', () => {
        render(<ThemeProvider theme={theme}>
            <Button variant="contained" href="https://www.google.co.il">לחץ כאן</Button>
        </ThemeProvider>);
        expect(screen.getByRole('link')).toHaveAttribute('href');
    });

    it('should render outlined variant', () => {
        render(<ThemeProvider theme={theme}>
            <Button variant="outlined">לחץ כאן</Button>
        </ThemeProvider>);
        expect(screen.getByRole('button')).toHaveStyle(`border: .2rem solid ${theme.palette.primary.main}`)
    });
});