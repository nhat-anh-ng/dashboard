import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

import "./app.css"
import CenteredGrid from "./components/centeredGrid/CenteredGrid";

function App() {
  return (
    <div>
      <div className="container">
      <Sidebar/>
      <div className="others">
        <Navbar/>
        <CenteredGrid/>
      </div>
      </div>
    </div>
  );
}

export default App;
