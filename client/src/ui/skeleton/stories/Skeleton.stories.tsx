import React from "react";
import { ComponentStory } from "@storybook/react";
import { Skeleton } from "../Skeleton";

export default {
  title: "Components/skeleton",
  component: Skeleton,
};

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  className: "some-class-name",
  width: '500px',
  height: '200px',
};

Basic.parameters = {
  direction: 'rtl'
}
