/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { Helmet } from 'react-helmet-async'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { GlobalStyle } from 'styles/global-styles'
import { useTranslation } from 'react-i18next'

import { HomePage } from 'app/pages/HomePage'
import { TodosPage } from 'app/pages/TodosPage'
import { NotFoundPage } from 'app/pages/NotFoundPage'

/**
 *
 * Routers for app
 *
 * */
export function App() {
  const { i18n } = useTranslation()
  return (
    <BrowserRouter>
      <Helmet
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
        titleTemplate="%s - React Boilerplate"
      >
        <meta content="A React Boilerplate application" name="description" />
      </Helmet>

      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<TodosPage />} path="/todos" />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}
