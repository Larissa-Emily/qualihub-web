import './App.css'
import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes/index.jsx"
export default function App(){
  return(
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  )
}