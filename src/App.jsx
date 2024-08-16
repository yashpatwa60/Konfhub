import ScreenLayout from "../src/layout/ScreenLayout.jsx"
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Login from "./components/Basic/Login.jsx"
import SignUp from "./components/Basic/SignUp.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" >
      <Route index element={<ScreenLayout/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
    </Route>
  )
)


function App() {


  return (
    <>
    <RouterProvider router={router} /> 
    </>
  )
}

export default App
