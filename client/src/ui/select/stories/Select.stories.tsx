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
const items = [1,2,3,4,5];

Regular.args = {
    value: 3,
    onChange: (e) => alert(e),
    helperText: 'הוראות מילוי',
    children: items.map((i) =>  <MenuItem value={i}>{i}</MenuItem>)
};

Regular.parameters = {
    direction: 'rtl'
}