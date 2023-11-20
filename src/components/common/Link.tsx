import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material'
import { Link as ReactRouterLink, LinkProps as RouterLinkProps } from 'react-router-dom'

interface LinkProps extends MuiLinkProps, RouterLinkProps {
  color?: string
  href?: string
  to: string
}

export function Link(props: LinkProps) {
  return <MuiLink {...props} component={ReactRouterLink} to={props.to} />
}
