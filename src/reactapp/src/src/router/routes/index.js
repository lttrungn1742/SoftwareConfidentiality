import { lazy } from 'react'

// ** Document title
const TemplateTitle = 'UIS PTITHCM'

// ** Default Route
const DefaultRoute = '/home'

// ** Merge Routes
const Routes = [
  {
    path: '/home',
    component: lazy(() => import('../../views/Home'))
  },
  {
    path: '/subjects',
    component: lazy(() => import('../../views/Subjects'))
  },
  {
    path: '/students',
    component: lazy(() => import('../../views/Students'))
  },
  {
    path: '/login',
    component: lazy(() => import('../../views/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  }
]

export { DefaultRoute, TemplateTitle, Routes }
