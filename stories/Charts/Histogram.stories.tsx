// Histogram.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Histogram } from './Histogram';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Histogram',
  component: Histogram,
} as ComponentMeta<typeof Histogram>;

const Template: ComponentStory<typeof Histogram> = (args) => <Histogram {...args} />;

export const Default = Template.bind({});
Default.args = {
  dataType: 'latency',
  showHistogramLabels: true,
  histogramAccentColor: '#1EA7FD',
  label: 'Latency distribution',
};