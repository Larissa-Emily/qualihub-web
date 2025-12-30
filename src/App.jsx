import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes/index.jsx";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <BrowserRouter>
      <RoutesApp />
      <ToastContainer />
    </BrowserRouter>
  );
}
