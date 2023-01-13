import { ComponentMeta, ComponentStory } from "@storybook/react";

import Button from "./index";

export default {
  title: "Button",
  component: Button,
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

//👇 Each story then reuses that template
export const Default: ComponentStory<typeof Button> = Template.bind({});
Default.args = { variant: "filled", children: "Button" };

export const LightTheme = Template.bind({});
LightTheme.args = Default.args;
LightTheme.parameters = {
  theme: "light",
};

export const DarkTheme = Template.bind({});
DarkTheme.args = Default.args;
DarkTheme.parameters = {
  theme: "dark",
};
