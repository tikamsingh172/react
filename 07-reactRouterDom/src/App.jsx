import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import { Home, About, Contact, Github, User, NotFound } from './components';

function App() {

  // Configure routes using plain objects
  /*
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "github",
          element: <Github />
        },
        {
          path: "user/:id",
          element: <User />
        },
        {
          path: "*",
          element: <NotFound />
        }
      ]
    }
  ])
*/
  // Or configure routes using JSX

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='github' element={<Github />} />
        <Route path='user/:id' element={<User />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App
