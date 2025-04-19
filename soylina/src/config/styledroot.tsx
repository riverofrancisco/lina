'use client'
import { ThemeProvider } from "@mui/material"
import { theme, darkTheme } from "@/config/theme"

export function StyledRoot({ children }: Readonly<{ children: React.ReactNode }>) {
  const isDarkMode = true
  return (
	<ThemeProvider theme={isDarkMode ? darkTheme : theme}>
	  {children}
	</ThemeProvider>
  )
}