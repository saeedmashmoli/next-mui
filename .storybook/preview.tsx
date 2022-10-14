import { ThemeProvider } from '@mui/material'
import React from 'react'

import { theme } from '../utilis/theme'
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
]