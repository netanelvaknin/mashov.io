import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Alert from '../Alert';
import {ThemeProvider} from 'styled-components';
import theme from '../../../theme';

export default {
    title: 'Components/Alert',
    component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <ThemeProvider theme={theme}>
    <Alert {...args} />
</ThemeProvider>;

export const Regular = Template.bind({});
Regular.args = {
    open: true,
};

Regular.parameters = {
    direction: 'rtl'
}