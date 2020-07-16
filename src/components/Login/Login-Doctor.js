import React from "react";
import classes from '../../UI/Navbar/Navbar.module.css';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

const LoginDoctor = () => {
    const style = {
        color: "white",
    };
    return (
      <div>
        <nav className={classes.Navbar}>
            <Link style={style} to="/">
                <h3 className={classes.title}>PsychHelp</h3>
            </Link>
            <ul className={classes.navLinks}>
                <Link style={style} to="/signup">
                    <li className={classes.item}>SignUp</li>
                </Link>
            </ul>
        </nav>
        <div class="LoginDoctor">
    <CardDeck style={{width:"400px", height:"60px"}}>
        <Card>

          <Card.Body>
          <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
          </Card.Body>

        </Card>

</CardDeck>
</div>
</div>
    );
};

export default LoginDoctor;
