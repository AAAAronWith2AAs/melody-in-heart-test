import "semantic-ui-css/semantic.min.css";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

export default App;
