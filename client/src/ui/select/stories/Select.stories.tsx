import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select from '../Select';
import {ThemeProvider} from 'styled-components';
import theme from '../../../theme';
import MenuItem from "../menu-item/MenuItem";

export default {
    title: 'Components/Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <ThemeProvider theme={theme}>
    <Select {...args} />
</ThemeProvider>;

export const Regular = Template.bind({});
Regular.args = {
    children: <MenuItem value={1}>Testing</MenuItem>
};

Regular.parameters = {
    direction: 'rtl'
}