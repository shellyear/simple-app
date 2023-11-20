import { ThemeProvider } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { SignIn } from './pages/SignIn'
import { theme } from './static/theme'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <SignIn />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
