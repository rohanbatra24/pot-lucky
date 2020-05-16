import React, { Fragment, useState, useEffect } from 'react';
import { Form, Navbar, NavDropdown, Image, Button, Modal, Card } from 'react-bootstrap';
import { useAuth0 } from '../contexts/auth0-context';
import logo from '../assets/bowl.png';

export default function NavBar(props) {

  const { isLoading, user, logout } = useAuth0();
  const [ show, setShow ] = useState(false);
  const [ value, setValue ] = useState("");
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

  useEffect(() => {
    setAllergyList();
  }, [props.allergies])

  const setAllergyList = () => {
    const allergiesList = props.allergies.map(allergy => {
      return (
        <Card>
          <Card.Body>
            {allergy}
            <Button 
              variant="danger"
              onClick={(e) => props.handleDeleteAllergy(e, allergy)}
            >
              Remove
            </Button>
          </Card.Body>
        </Card>       
      )
    })
    return allergiesList;
  }

  const ingredientList = props.ingredients.map((ingred) => {
		return <option key={ingred.spoonacular_id}>{ingred.name}</option>;
	});

    return (
      <Fragment>
        <Navbar fixed="top" bg="light">
          <div className="nav-left">
            <Image className="nav-logo" src={logo} alt="PotLucky Logo" roundedCircle/>
            <Navbar.Brand href="#home">PotLucky</Navbar.Brand>
          </div>
            {!isLoading && user && (
              <div className="nav-right">
                  <Image className="nav-avatar" src={user.picture} alt="My Avatar" roundedCircle/>
                  <NavDropdown alignRight title={`Signed in as: ${user.nickname}`} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">My Saved Recipes</NavDropdown.Item>
                    <NavDropdown.Item onClick={handleShow}>Allergies</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      <Button 
                          className="btn-logout"
                          variant="outline-dark"
                          onClick={() => logout({ returnTo: window.location.origin })}
                        >
                          Log Out
                        </Button>
                    </NavDropdown.Item>
                  </NavDropdown>  
              </div>
            )}
        </Navbar>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>My Allergies</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>We'll alert you if a recipe includes any of these ingredients!</h3>
            <Form>
              <Form.Group>
                <Form.Control
                  className="form-component"
                  value={value}
                  name="allergy"
                  placeholder="Ingredient"
                  type="text"
                  list="ingredients"
                  onChange={(e) => setValue(e.target.value)}
                />
                <datalist id="ingredients">
                  <select>{ingredientList}</select>
                </datalist>
                <Button
                  className="centered-button"
                  variant="outline-warning"
                  type="submit"
                  onClick={(evt => props.handleAddAllergy(evt, value))}
                >
                  Save
                </Button>
              </Form.Group>
              </Form>
            {setAllergyList()}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    )
};
