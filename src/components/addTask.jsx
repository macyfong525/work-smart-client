import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";

const AddTask = () => {
  const [users, setUsers] = useState([]);
  const [selectUser, setSelectUser] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [title, settitle] = useState("");
  const [impt, setImpt] = useState(false);

  useEffect(() => {
    const url = "http://localhost:5001/api/userinfo";

    axios.get(url).then((resp) => {
      //   console.log(resp.data);
      setUsers(resp.data);
      setSelectUser(resp.data[0]._id);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title === "") {
      alert("Please enter task title");
      return;
    }
    const url = "http://localhost:5001/api/taskinfo";

    console.log(selectUser, title, start, end, impt);
    const taskbody = {
      selectUser: selectUser,
      title: title,
      start: start,
      end: end,
      impt: impt,
    };

    axios.post(url, taskbody).then((resp) => {
      console.log(resp.data);
      alert(resp.data);
    });
    event.target.reset();
    setStart(new Date());
    setEnd(new Date());
    settitle("");
  };

  return (
    <div className="task-container">
      <Form onSubmit={handleSubmit}>
        <fieldset>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="addTaskInput">Add Task</Form.Label>
            <Form.Control
              id="addTaskInput"
              placeholder="enter task title"
              onChange={(e) => settitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="userSelect">Assign to User</Form.Label>
            <Form.Select
              id="userSelect"
              onChange={(e) => setSelectUser(e.target.value)}
            >
              {users.map((user) => (
                <option key={user._id} value={user._id}>
                  {user.firstname}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="taskDate">
              From Datetime - End Datetime
            </Form.Label>
            <DateRangePicker
              initialSettings={{
                locale: {
                  format: "M/DD hh:mm A",
                },
                startDate: start,
                endDate: end,
                timePicker: true,
              }}
              onApply={(event, picker) => {
                //   console.log(
                //     "picker",
                //     picker.startDate.toISOString(),
                //     picker.endDate.toISOString()
                //   );
                setStart(new Date(picker.startDate));
                setEnd(new Date(picker.endDate));
              }}
            >
              <input className="form-control" type="text" />
            </DateRangePicker>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label />
            <Form.Check
              type="checkbox"
              id="taskCheck"
              label="Important"
              onChange={(e) => setImpt(!impt)}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </fieldset>
      </Form>
    </div>
  );
};

export default AddTask;
