import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./components/routes";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
