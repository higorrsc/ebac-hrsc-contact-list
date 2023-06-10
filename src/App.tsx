import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import store from './store'
import EstiloGlobal, { Container } from './styles'

import Home from './pages/Home'
import ContactDetail from './pages/ContactDetail'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/new',
    element: <ContactDetail updateContact={false} />
  },
  {
    path: '/edit',
    element: <ContactDetail updateContact={true} />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={routes} />
      </Container>
    </Provider>
  )
}

export default App
