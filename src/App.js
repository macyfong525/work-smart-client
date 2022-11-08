import Home from "./components/home";
import AddTask from "./components/addTask";
import Jobs from "./components/jobs";
import Schedule from "./components/schedule";
import Profile from "./components/profile";
import NotFound from "./components/notFound";
import SideBar from "./components/sideBar";
import About from "./components/about";
import Contact from "./components/contact";
import Location from "./components/location";
import { Route, Routes } from "react-router-dom";
import "./App.css";

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
          <Route path="/about" element={<About />} />
          <Route path="/about/us" element={<Contact />} />
          <Route path="/about/location" element={<Location />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
