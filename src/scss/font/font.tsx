import { createTheme } from '@fluentui/react';

const appTheme = createTheme({
  defaultFontStyle: { fontFamily: 'Monaco, Menlo, Consolas', fontWeight: 'regular' },
  fonts: {
    small: {
      fontSize: '11px',
    },
    medium: {
      fontSize: '13px',
    },
    large: {
      fontSize: '20px',
      fontWeight: 'semibold',
    },
    xLarge: {
      fontSize: '22px',
      fontWeight: 'semibold',
    },
  },
});