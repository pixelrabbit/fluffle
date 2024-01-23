import type { Meta, StoryObj } from '@storybook/react';

import Card from './card';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Card',
  component: Card,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Lorem non duis deserunt mollit officia laboris. Et duis esse velit ut id non nisi et fugiat deserunt eu. Mollit aliqua deserunt cupidatat quis eu incididunt minim esse dolor non labore ad. Nisi id veniam sunt ut quis. Voluptate commodo exercitation non aliquip proident sint amet Lorem proident enim tempor. Labore ex amet deserunt velit quis. Laboris excepteur anim magna laboris mollit excepteur deserunt dolore magna."
  },
};