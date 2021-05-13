import "./App.css";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Chat from "./chat.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <div className="app_body">
          <Sidebar />
          <Switch>
            <Route path="/room/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <h3>Welcome</h3>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
