import type { Meta, StoryObj } from '@storybook/react';

import NavBars from '../../components/sharedUi/Navbar';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'NavBar',
  component: NavBars,

} satisfies Meta<typeof NavBars>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Nav: Story = {}
