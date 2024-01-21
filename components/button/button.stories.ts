import type { Meta, StoryObj } from '@storybook/react';

import Button from './button';
console.log(Button)

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    // layout: 'centered',
  },
  // tags: ['autodocs'],
  argTypes: {
    type: {
      control: "select",
      options: ["primary","secondary"]
    }
  },
  args: {
    href: "#"
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Primary"
  },
};