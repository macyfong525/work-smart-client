import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

const Schedule = ({users = []}) => {
  const [selectUser, setSelectUser] = useState("");
  const [events, setEvents] = useState([]);

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

  function handleEvent(event) {
    // console.log(event.target.value);
    setSelectUser(event.target.value);
    const taskurl = "http://localhost:5001/api/taskinfo";
    axios.get(taskurl).then((resp) => {
      console.log(resp.data);
      const userTasks = resp.data.filter(
        (task) => task.selectUser === event.target.value
      );
      console.log(userTasks);
      setEvents(userTasks.map((task)=>task.impt? {...task, backgroundColor:"red"}:task));
    });
  }

  return (
    <div className="calendar">
      <Form.Group className="mb-2">
        <Form.Select id="userSelect" onChange={handleEvent}>
          <option key={0} value={0}>
            Select User's Schedule
          </option>
          {users.map((user) => (
            <option key={user._id} value={user.username}>
              {user.username} ({user.firstname})
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
        contentHeight="600px"
        initialView="dayGridMonth"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        events={events}
      />
    </div>
  );
};

export default Schedule;
