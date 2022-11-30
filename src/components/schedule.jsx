import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";


const Schedule = () => {
  const [users, setUsers] = useState([]);
  const [selectUser, setSelectUser] = useState("");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5001/api/userinfo";

    axios.get(url).then((resp) => {
      //   console.log(resp.data);
      setUsers(resp.data);
      //   setSelectUser(resp.data[0]._id);
    });
  }, []);

  //   useEffect(() => {
  //     const taskurl = "http://localhost:5001/api/taskinfo";
  //     axios.get(taskurl).then((resp) => {
  //       console.log(resp.data);
  //       const firstUserTasks = resp.data.filter(
  //         (task) => task.selectUser == users[0]._id
  //       );
  //       console.log(firstUserTasks);
  //       setEvents(firstUserTasks);
  //       // setUsers(resp.data);
  //     });
  //   }, []);

  // const events = [{ title: "today's event", date: new Date() }];

  function handleEvent(event) {
	console.log(event.target.value)
    setSelectUser(event.target.value);
    const taskurl = "http://localhost:5001/api/taskinfo";
    axios.get(taskurl).then((resp) => {
      console.log(resp.data);
      const firstUserTasks = resp.data.filter(
        (task) => task.selectUser === event.target.value
      );
      console.log(firstUserTasks);
      setEvents(firstUserTasks);
    });
  };

  return (
    <div className="calendar">
      <Form.Group className="mb-2">
        <Form.Select
          id="userSelect"
          onChange={handleEvent}
        >
          <option key={0} value={0}>Select User's Schedule</option>
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.firstname}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <FullCalendar
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
		contentHeight = "600px"
        initialView="dayGridMonth"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        events={events}
      />
    </div>
  );
};

export default Schedule;
