import "./App.css";
import Home from "./components/home";
import AddTask from "./components/addTask";
import Jobs from "./components/jobs";
import Schedule from "./components/schedule";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/profile";
import NotFound from "./components/notFound";
import SideNav from "./components/sideNav";
import SideBar from "./components/sideBar";

function App() {
  return (
    <div className="App">
      <SideBar />
      {/* <SideNav /> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/addtask" element={<AddTask />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
