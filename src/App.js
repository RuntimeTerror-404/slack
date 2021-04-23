import "./App.css";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";

function App() {
  return (
    <div className="App">
      {/* header */}
      <Header />

      <div className="app_body">
        <Sidebar />
        {/* sidebar */}
        {/* Routers for navigate to channels */}
      </div>
    </div>
  );
}

export default App;
