import { RouterProvider } from "react-router-dom"
import router from "./PAGES/Routes/Router"

function App() {

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
