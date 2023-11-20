import { ThemeProvider } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { theme } from './static/theme'
import { Pages } from './pages/Pages'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Pages />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
