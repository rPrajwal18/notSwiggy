
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import Error from './components/Error'
import Cart from './components/Cart'
import RestaurantMenu from './components/RestaurantMenu'
import { CartProvider } from './components/CartContext'

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />,
  },
])

export default function Main() {
  return (

  <CartProvider>
        <RouterProvider router={appRouter} />
  </CartProvider>
);

}
