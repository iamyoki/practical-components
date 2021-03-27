import HomePage from '../pages/HomePage'
import PaginationPage from '../pages/PaginationPage'
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
  {
    path: '/pagination',
    component: PaginationPage,
    meta: {
      title: 'Pagination Page',
    },
  },
]

export default {}
