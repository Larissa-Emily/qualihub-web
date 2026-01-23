import "./App.css";
import { HashRouter } from "react-router-dom";
import RoutesApp from "./routes/index.jsx";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <HashRouter>
      <RoutesApp />
      <ToastContainer />
    </HashRouter>
  );
}
