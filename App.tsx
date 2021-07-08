import React from 'react';
import { ThemeProvider } from 'styled-components'

import theme from './src/global/styles/themes';
import { Dashboard } from './src/screens/Dashboard';

export default function App() {
  return (
    <ThemeProvider theme={theme.dark}>
      <Dashboard />
    </ThemeProvider>
  );
}
