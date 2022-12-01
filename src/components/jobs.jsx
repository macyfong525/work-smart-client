import Table from "react-bootstrap/Table";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import DateRangePicker from "react-bootstrap-daterangepicker";

const Record = (props) => (
  <tr>
    <td>{props.task.selectUser} ({props.users.find(user=>props.task.selectUser===user.username)['firstname']})</td>
    <td>{props.task.title}</td>
    <td>{new Date(props.task.start).toLocaleString()}</td>
    <td>{new Date(props.task.end).toLocaleString()}</td>
    <td>{props.task.impt ? "Y" : "N"}</td>
    <td>
      <Button onClick={props.handleUpdate}>Update</Button>
    </td>
    <td>
      <Button variant="danger" onClick={props.handleDelete}>
        Delete
      </Button>
    </td>
  </tr>
);

const Jobs = ({ users = [] }) => {
  const [records, setRecords] = useState([]);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [task, setTask] = useState("");
  const [impt, setImpt] = useState(false);

  useEffect(() => {
    const url = "http://localhost:5001/api/taskinfo";

    axios.get(url).then((resp) => {
      console.log(resp.data);
      setRecords(resp.data);
    });
  }, []);

  const handleClose = () => {
    setTitle("");
    setStart(new Date());
    setEnd(new Date());
    setTask({});
    setShow(false);
  };

  const handleUpdate = (task) => {
    setTitle(task.title);
    setStart(new Date(task.start));
    setEnd(new Date(task.end));
    setImpt(task.impt);
    setShow(true);
    setTask(task);
  };

  const handleChange = () => {
    const url = `http://localhost:5001/api/taskinfo/${task._id}`;

    const body = { ...task, title, start, end, impt };

    console.log(body);
    axios
      .put(url, body)
      .then((resp) => {
        // console.log(resp.data);
        setRecords(records.map((record) => (body._id === record._id) ? body:  record));
      })
      .catch((error) => {
        console.log(error);
      });
    setShow(false);
  };

  const handleDelete = (_id) => {
    const url = `http://localhost:5001/api/taskinfo/${_id}`;

    axios
      .delete(url)
      .then((resp) => {
        console.log(resp.data);
        setRecords(records.filter((record) => record._id !== _id));
        alert(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>All Tasks</h1>
      <Table style={{ border: "solid grey 1px" }}>
        <thead>
          <tr>
            <th>User</th>
            <th>Task title</th>
            <th>Start Datetime</th>
            <th>End Datetime</th>
            <th>Important</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((task) => (
            <Record
              users={users}
              task={task}
              key={task._id}
              handleUpdate={() => handleUpdate(task)}
              handleDelete={() => handleDelete(task._id)}
            />
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <fieldset>
              <Form.Group className="mb-3">
                <Form.Control
                  id="addTaskInput"
                  placeholder="enter task title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
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
                  defaultChecked={impt}
                  onChange={(e) => setImpt(!impt)}
                />
              </Form.Group>
            </fieldset>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleChange}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Jobs;
