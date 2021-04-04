import HomePage from '../pages/HomePage'
import NotificationPage from '../pages/NotificationPage'
import PaginationPage from '../pages/PaginationPage'
import ScrollPage from '../pages/ScrollPage'
import SpringPage from '../pages/SpringPage'
import SwitchPage from '../pages/SwitchPage'
import ToastPage from '../pages/ToastPage'
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
  {
    path: '/switch',
    component: SwitchPage,
    meta: {
      title: 'Switch Page',
    },
  },
  {
    path: '/notification',
    component: NotificationPage,
    meta: {
      title: 'Notification Page',
    },
  },
  {
    path: '/spring',
    component: SpringPage,
    meta: {
      title: 'Spring Page',
    },
  },
  {
    path: '/scroll',
    component: ScrollPage,
    meta: {
      title: 'Scroll Animation Page',
    },
  },
  {
    path: '/toast',
    component: ToastPage,
    meta: {
      title: 'Toast Page',
    },
  },
]

export default {}
