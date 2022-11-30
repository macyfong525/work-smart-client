import Table from 'react-bootstrap/Table';
import axios from "axios";
import { useEffect, useState } from "react";

const Record = (props) => (
	<tr>
	  <td>{props.user.firstname}</td>
	  <td>{props.user.lastname}</td>
	  <td>@{props.user.username}</td>
	  <td>{props.user.email}</td>
	  <td>{props.user.phoneNum}</td>
	  <td>{props.user.department}</td>
	  <td></td>
	</tr>
   );

const Profile = () => {
	const [records, setRecords] = useState([]);

	useEffect(() => {
		const url = "http://localhost:5001/api/userinfo";
	
		axios.get(url).then((resp) => {
		  console.log(resp.data);
		  setRecords(resp.data);
		});
	  }, []);

	return (
		<div style={{padding:"20px", textAlign:"center"}}>
		<h1>Display All Users</h1>
		<Table striped >
		  <thead>
			<tr>
			  <th>First Name</th>
			  <th>Last Name</th>
			  <th>Username</th>
			  <th>Email</th>
			  <th>Phone Number</th>
			  <th>Department</th>
			</tr>
		  </thead>
		  <tbody>
			{records.map((user)=><Record user={user} key={user._id}/>)}
		  </tbody>
		</Table>
		</div>
	  );
	}
 
export default Profile;