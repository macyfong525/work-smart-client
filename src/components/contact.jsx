import Card from "react-bootstrap/Card";

const Contact = () => {
  return (
    <div style={{ padding: "3em" }}>
      <div style={{ padding: "20px", display: "inline-block"  }}>
        <Card style={{ width: "18rem"}}>
          <Card.Img variant="top" src={require("../images/101212796.png")} />
          <Card.Body>
            <Card.Title>Akshay</Card.Title>
            <a href="https://github.com/AkshaySaini22">Github</a>
            <Card.Text>CSIS student</Card.Text>
          </Card.Body>
        </Card>
      </div>
	  <div style={{ padding: "20px", display: "inline-block"  }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={require("../images/99525541.png")} />
        <Card.Body>
          <Card.Title>Macy</Card.Title>
          <a href="https://github.com/macyfong525">Github</a>
          <Card.Text>CSIS student</Card.Text>
        </Card.Body>
      </Card>
	  </div>
    </div>
  );
};

export default Contact;
