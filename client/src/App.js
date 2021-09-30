import "semantic-ui-css/semantic.min.css";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ResponsiveContainer from "./components/ResponsiveContainer/ResponsiveContainer";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
