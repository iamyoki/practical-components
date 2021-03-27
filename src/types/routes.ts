import { RouteComponentProps } from '@reach/router'

export interface RoutesPageMeta {
  title?: string
  [key: string]: string | undefined
}

export interface RoutesPage {
  path: string
  component: (props: RouteComponentProps) => any
  meta?: RoutesPageMeta
}
