import { globalHistory, RouteComponentProps, Router } from '@reach/router'
import { QueryParamProvider } from 'use-query-params'
import { pages } from './config'

const Routes = (props: RouteComponentProps) => {
  return (
    <Router id='Router'>
      <QueryParamProvider {...{ path: '/' }} reachHistory={globalHistory}>
        {pages.map((item) => (
          <item.component key={item.path} path={item.path} {...item.meta} />
        ))}
      </QueryParamProvider>
    </Router>
  )
}

export default Routes
