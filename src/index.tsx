import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { ChakraProvider } from '@chakra-ui/react'

import { App } from 'app'
import { configureAxios } from 'configureAxios'
import { store } from 'store'
import { theme } from 'theme'
import { ModalDialogProvider } from 'app/components/modules/ModalDialog/ModalDialogProvider'

// Use consistent styling
import 'sanitize.css/sanitize.css'

// Initialize axios
configureAxios()

// Initialize languages
import 'locales/i18n'

const persistor = persistStore(store)

/**
 * Root App
 */
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <PersistGate loading={null} persistor={persistor}>
        <HelmetProvider>
          <ModalDialogProvider>
            <App />
          </ModalDialogProvider>
        </HelmetProvider>
      </PersistGate>
    </ChakraProvider>
  </Provider>,
)
