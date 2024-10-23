import { Layout } from 'app/components/modules/Layout'
import { HomePage } from 'app/pages/HomePage'
import { RouteObject } from 'react-router-dom'
import { ScreenUrlPaths } from 'types/ScreenUrlPath'

export const routesUsers: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      //   {
      //     path: ScreenUrlPaths.Root,
      //     element: <Redirect to={ScreenUrlPaths.Root} />,
      //   },
      {
        path: ScreenUrlPaths.Root,
        element: <HomePage />,
      },
    ],
  },
]
