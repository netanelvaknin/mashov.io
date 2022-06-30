import React from 'react';
import {screen, render, fireEvent} from '@testing-library/react';
import Modal from "../Modal";
import {ThemeProvider} from "styled-components";
import theme from '../../../theme';

const mockView = (
    <ThemeProvider theme={theme}>
        <Modal open={true} onCloseModal={jest.fn()} />
    </ThemeProvider>
);

describe('Modal', () => {
    it('should render Modal correctly', () => {
        render(mockView);
        expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('should close modal when pressing escape key', () => {
        const onCloseModalMock = jest.fn();
        render(
            <ThemeProvider theme={theme}>
            <Modal open={true} onCloseModal={onCloseModalMock} />
            </ThemeProvider>
        );

        const dialog = screen.getByRole('dialog');
        fireEvent.keyDown(dialog, {
            key: "Escape",
            code: "Escape",
            keyCode: 27,
            charCode: 27
        });

        expect(onCloseModalMock).toHaveBeenCalled();
    });

    it('should not close the modal if different key pressed on the keyboard', () => {
        const onCloseModalMock = jest.fn();
        render(
            <ThemeProvider theme={theme}>
                <Modal open={true} onCloseModal={onCloseModalMock} />
            </ThemeProvider>
        );

        const dialog = screen.getByRole('dialog');
        fireEvent.keyDown(dialog, {
            key: "some key",
            code: "some key",
            keyCode: 22229,
            charCode: 22229
        });

        expect(onCloseModalMock).not.toHaveBeenCalled();
    });

    it('should render null when modal receive open=false', () => {
        render(
            <ThemeProvider theme={theme}>
                <Modal open={false} onCloseModal={jest.fn()} />
            </ThemeProvider>
        );

        const dialog = screen.queryByRole('dialog');
        expect(dialog).not.toBeInTheDocument();
    });

    it('should not close the modal when clicking the children', () => {
        render(
            <ThemeProvider theme={theme}>
                <Modal open={true} onCloseModal={jest.fn()}>
                    testing
                </Modal>
            </ThemeProvider>
        );

        const children = screen.getByText(/testing/i);
        const dialog = screen.queryByRole('dialog');

        fireEvent.click(children);
        expect(dialog).toBeVisible();
    })
});