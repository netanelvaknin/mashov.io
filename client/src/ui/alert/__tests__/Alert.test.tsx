import React from 'react';
import {screen, render, fireEvent} from '@testing-library/react';
import Alert from "../Alert";
import {ThemeProvider} from "styled-components";
import theme from '../../../theme';

const mockView = (
    <ThemeProvider theme={theme}>
        <Alert open={true} onAlertClose={jest.fn()} />
    </ThemeProvider>
);

describe('Alert', () => {
    it('should render Alert correctly', () => {
        render(mockView);
        expect(screen.getByTestId('mashov-alert')).toBeInTheDocument();
    });

    it('should throw error when passed closeAfter prop but without onAlertClose prop', () => {
        let actualErrorMsg;

        try {
            render(
                <ThemeProvider theme={theme}>
                    <Alert open={true} closeAfter={3000} />
                </ThemeProvider>
            );
        } catch (e: any) {
            actualErrorMsg = e.message;
        }

        expect(actualErrorMsg).toBe('Cannot use prop closeAfter without using onAlertClose prop');
    });

    it('should run onAlertClose after x ms that passed to closeAfter prop', () => {
        const onAlertCloseMock = jest.fn();
        jest.useFakeTimers();
        jest.spyOn(global, 'setTimeout');

        render(
            <ThemeProvider theme={theme}>
                <Alert open={true} onAlertClose={onAlertCloseMock} closeAfter={3000} />
            </ThemeProvider>
        );
        jest.runAllTimers();

        expect(onAlertCloseMock).toHaveBeenCalled();
    });

    it('should render null if open=false', () => {
        render(
            <ThemeProvider theme={theme}>
                <Alert open={false} onAlertClose={jest.fn()} closeAfter={3000} />
            </ThemeProvider>
        );

        expect(screen.queryByTestId('mashov-alert')).not.toBeInTheDocument();
    })
});