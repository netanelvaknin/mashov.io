import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextField from '../TextField';
import {ThemeProvider} from 'styled-components';
import theme from '../../../theme';

export default {
    title: 'Components/TextField',
    component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <ThemeProvider theme={theme}>
    <TextField {...args} />
</ThemeProvider>;

export const Regular = Template.bind({});
Regular.args = {
    label: 'כתובת מייל',
    value: 'emailofnetanel@gmail.com',
    className: 'some-custom-classname',
    onChange: () => console.log('changed'),
};

Regular.parameters = {
    direction: 'rtl'
}

export const WithHelperText = Template.bind({});
WithHelperText.args = {
    label: 'כתובת מייל',
    value: 'emailofnetanel@gmail.com',
    className: 'some-custom-classname',
    helperText: 'טקסט עזר לדוגמה',
    onChange: () => console.log('changed'),
};

WithHelperText.parameters = {
    direction: 'rtl'
}

export const MultiLine = Template.bind({});
MultiLine.args = {
    label: 'משוב לקוח',
    value: 'טקסט משוב לדוגמה טקסט משוב לדוגמה טקסט משוב לדוגמה טקסט משוב לדוגמה',
    className: 'some-custom-classname',
    helperText: 'טקסט עזר לדוגמה',
    multiLine: true,
    onChange: () => console.log('changed'),
};

MultiLine.parameters = {
    direction: 'rtl'
}