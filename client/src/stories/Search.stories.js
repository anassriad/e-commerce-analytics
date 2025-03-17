import React from 'react';
import Search from '@components/common/Search';

export default {
  title: 'Components/Search', // Storybook title
  component: Search, // The component being showcased
};

// Template for the story
const Template = (args) => <Search {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {}; // No props needed for this component