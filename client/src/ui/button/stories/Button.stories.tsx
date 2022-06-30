import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../Button';
import {ThemeProvider} from 'styled-components';
import theme from '../../../theme';

export default {
    title: 'Components/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <ThemeProvider theme={theme}>
    <Button {...args} />
</ThemeProvider>;

export const Contained = Template.bind({});
Contained.args = {
    variant: 'contained',
    children: 'לחץ כאן',
    onClick: () => alert('clicked')
};

Contained.parameters = {
    direction: 'rtl'
}

export const Outlined = Template.bind({});
Outlined.args = {
    variant: 'outlined',
    children: 'לחץ כאן',
    onClick: () => alert('clicked')
};

Outlined.parameters = {
    direction: 'rtl'
}

export const Link = Template.bind({});
Link.args = {
    variant: 'outlined',
    children: 'לחץ כאן',
    href: 'https://www.google.co.il'
};

Link.parameters = {
    direction: 'rtl'
}