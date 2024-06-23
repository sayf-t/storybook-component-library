import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const theme = create({
  base: 'dark',
  brandTitle: 'Sayf Storybook',
  brandUrl: '#',
  brandImage: '/logo.png'});

addons.setConfig({
  theme,
});