import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Progress from "./components/Progress/Progress";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="right-container">
        <Navbar />
        <Progress />
      </div>
    </div>
  );
}

export default App;
