import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

const AddTask = () => {
	return ( 
		<Form>
		<fieldset>
		  <Form.Group className="mb-3">
			<Form.Label htmlFor="addTaskInput">Add Task</Form.Label>
			<Form.Control id="addTaskInput" placeholder="input" />
		  </Form.Group>
		  <Form.Group className="mb-3">
			<Form.Label htmlFor="taskSelect">Select menu</Form.Label>
			<Form.Select id="taskSelect">
			  <option>option 1</option>
			  <option>option 2</option>
			  <option>option 3</option>
			  <option>option 4</option>
			  <option>option 5</option>
			</Form.Select>
		  </Form.Group>
		  <Form.Group className="mb-3">
			<Form.Check
			  type="checkbox"
			  id="taskCheck"
			  label="check"
			/>
		  </Form.Group>
		  <Button type="submit">Submit</Button>
		</fieldset>
	  </Form>
		);
}
 
export default AddTask;