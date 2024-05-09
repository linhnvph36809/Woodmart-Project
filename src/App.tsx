import { RouterProvider } from 'react-router-dom'
import routers from './routers/routers'
function App() {

  return (
    <>
    <RouterProvider router={routers} />
    </>
  )
}

export default App
