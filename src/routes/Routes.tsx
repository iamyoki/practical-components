import { RouteComponentProps, Router } from '@reach/router'
import { pages } from './config'

const Routes = (props: RouteComponentProps) => {
  return (
    <Router id="Router">
      {pages.map((item) => (
        <item.component key={item.path} path={item.path} {...item.meta} />
      ))}
    </Router>
  )
}

export default Routes
