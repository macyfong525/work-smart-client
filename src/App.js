import Home from "./components/home";
import AddTask from "./components/addTask";
import Jobs from "./components/jobs";
import Schedule from "./components/schedule";
import Profile from "./components/profile";
import NotFound from "./components/notFound";
import SideBar from "./components/sideBar";
import Contact from "./components/contact";
import Location from "./components/location";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import Login from "./components/login/login";
import Header from "./components/header";
import axios from "axios";

function App() {
  const [hide, setHide] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5001/api/userinfo";
    axios.get(url).then((resp) => {
      setUsers(resp.data);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <SideBar hide={hide} />
      <main>
        <Routes>
          <Route path="/" element={<Home users={users} />} />
          <Route
            path="/login"
            element={<Login setSideBarVisibility={setHide} />}
          />
          <Route path="/schedule" element={<Schedule users={users} />} />
          <Route path="/addtask" element={<AddTask users={users} />} />
          <Route path="/jobs" element={<Jobs users={users} />} />
          <Route path="/profile" element={<Profile users={users} />} />
          <Route path="/about/us" element={<Contact />} />
          <Route path="/about/location" element={<Location />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
