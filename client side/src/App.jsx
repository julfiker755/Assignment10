import {RouterProvider,} from "react-router-dom";
import routes from "./components/Routerdom/routes/routes";
function App() {
  return (
  <>
   <RouterProvider router={routes}></RouterProvider>
   <div className="w-11/12"></div>
  </>
  )
}

export default App
