import Home from "./pages/Home"
import { ToastContainer } from 'react-toastify';


function App() {
  

  return (
    <>
    <Home />
    <ToastContainer 
autoClose={1000}
hideProgressBar/>
    </>
  )
}

export default App
