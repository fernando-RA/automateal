import { theme as proTheme } from '@chakra-ui/pro-theme';
import { extendTheme } from '@chakra-ui/react';
import '@fontsource/fira-code';

const colors = { ...proTheme.colors, brand: proTheme.colors.orange };

const themeObj = {
  colors,
  fonts: {
    heading: "'Fira CodeVariable', -apple-system, system-ui, sans-serif",
    body: "'Fira CodeVariable', -apple-system, system-ui, sans-serif",
  },
  proTheme,
};

export const theme = extendTheme({ ...themeObj });
