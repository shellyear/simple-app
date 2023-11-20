import { createTheme, LinkProps } from '@mui/material'
import { Link, LinkProps as RouterLinkProps } from 'react-router-dom'
import React from 'react'

const LinkBehavior = React.forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }>(
  (props, ref) => {
    const { href, ...other } = props
    return <Link ref={ref} to={href} {...other} />
  }
)

const colors = {
  red: '#EF233C',
  black: '#191919',
  lightGray: '#EEEFF0S',
  gray: '#CCCCCC',
  darkGray: '#808080',
  white: '#FFFFFF',
  blackShadow: '#373737',
  blue: '#20A9F3'
}

type Colors = keyof typeof colors

type CustomColors = Record<Colors, string>

declare module '@mui/material/styles/createPalette' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface CommonColors extends CustomColors {}
}

const breakpoints = {
  values: {
    xs: 0,
    sm: 576,
    md: 900,
    lg: 1200,
    xl: 1356
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.black,
      light: colors.blackShadow
    },
    secondary: {
      main: colors.lightGray,
      dark: colors.darkGray
    },
    error: {
      main: colors.red
    },
    common: {
      ...colors
    },
    action: {
      active: colors.black,
      hover: colors.gray,
      focus: colors.blue
    },
    text: {
      primary: colors.black
    },
    background: {
      default: colors.lightGray
    },
    divider: colors.gray
  },
  typography: {
    h1: {
      fontFamily: 'Boxing, sans-serif, serif',
      fontSize: 64,
      fontWeight: 400
    },
    h2: {
      fontFamily: 'Boxing, sans-serif, serif',
      fontSize: 36,
      fontWeight: 400
    },
    h3: {
      fontFamily: 'Excon, sans-serif, serif',
      fontSize: 24,
      fontWeight: 700
    },
    subtitle1: {
      fontFamily: 'Excon, sans-serif, serif',
      fontSize: 16,
      fontWeight: 700
    },
    subtitle2: {
      fontFamily: 'Excon, sans-serif, serif',
      fontSize: 14,
      fontWeight: 700
    },
    button: {
      fontFamily: 'Excon, sans-serif, serif',
      fontSize: 16,
      fontWeight: 500,
      textTransform: 'none'
    },
    body1: {
      fontFamily: 'Excon, sans-serif, serif',
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.5
    },
    body2: {
      fontFamily: 'Excon, sans-serif, serif',
      fontSize: 14,
      fontWeight: 400
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiLink: {
      defaultProps: {
        component: LinkBehavior
      } as LinkProps
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior
      }
    }
  },
  breakpoints
})
