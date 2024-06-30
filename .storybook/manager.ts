import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const theme = create({
  base: 'dark',
  brandTitle: 'FalconUI by Sayf',
  brandUrl: '#',
  brandImage: '/falcon_ui.png'});

addons.setConfig({
  theme,
});