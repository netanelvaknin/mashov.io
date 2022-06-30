import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal from '../Modal';
import {ThemeProvider} from 'styled-components';
import theme from '../../../theme';

export default {
    title: 'Components/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <ThemeProvider theme={theme}>
    <Modal {...args} />
</ThemeProvider>;

export const Regular = Template.bind({});
Regular.args = {
    open: true,
};

Regular.parameters = {
    direction: 'rtl'
}