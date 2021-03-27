import HomePage from '../pages/HomePage'
import { RoutesPage } from '../types/routes'

// All pages set in here
export const pages: RoutesPage[] = [
  {
    path: '/',
    component: HomePage,
    meta: {
      title: 'Home Page',
    },
  },
]

export default {}
