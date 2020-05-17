import React, { useState } from "react";
import { Button, Spinner, Form } from "react-bootstrap";

const units = [
	'g',
	'kg',
	'lbs',
	'pounds',
	'ozs',
	'cups',
	'ml',
	'l',
	'liters',
	'tsp',
	'tbsps',
	'qt',
	'bunch',
	'scoops',
	'leaves',
	'drops',
	'sheets',
	'slices',
	'inches',
	'stalks',
	'sticks',
	'strips',
	'sprigs',
	'dashes',
	'pinches'
];

const unitList = units.map((unit) => {
	return <option key={unit}>{unit}</option>;
});

export default function Show(props) {

  const [mode, setMode] = useState("view");
	const [values, setValues] = useState({unit: "", quantity: "", expiry: null})

	// useEffect(() => {
	// }, [mode])
  if (mode === "view") {
    return (
      <div>
        <h4>Quantity: {+props.item.quantity}</h4>
        <h4>Unit: {props.item.unit}</h4>
        <Button
					variant="outline-warning"
					onClick={() => {
						setValues({unit: props.item.unit, quantity: props.item.quantity, expiry: props.item.expiry})
						setMode("edit")
					}
				}
				>
					Edit
				</Button>
				<Button
          variant="outline-danger"
          type="submit"
          onClick={(event) =>
            props.handleDeleteItem(event, props.item.id, props.item.name)
          }
        >
          Delete
        </Button>
      </div>
    );
  } else if (mode === "edit") {
    return (
      <div>
				Update your item:
        <Form>
          <Form.Group>
						<Form.Label>Unit:</Form.Label>
            <Form.Control
              as="select"
              className="form-component"
              value={values.unit}
              name="unit"
              placeholder={values.unit}
              onChange={(e) => setValues({ ...values, unit: e.target.value })}
            >
              <option value="" defaultValue disabled hidden>
                Pick a unit
              </option>
              {unitList}
            </Form.Control>
						<Form.Label>Quantity:</Form.Label>
            <Form.Control
              className="form-component"
              value={values.quantity}
              name="quantity"
              placeholder={values.quantite}
              type="number"
              onChange={(e) =>
                setValues({ ...values, quantity: e.target.value })
              }
            />
						<Form.Label>Exipration Date:</Form.Label>
            <Form.Control
              className="form-component"
              value={values.expiry}
              name="expiry"
              placeholder={values.expiry}
              type="date"
              onChange={(e) => setValues({ ...values, expiry: e.target.value })}
            />
          </Form.Group>
					<Button
						variant="outline-warning"
						onClick={(e) => {
							props.handleEditItem(e, { ...values, itemId: props.item.id})
							setMode("view")
						}
					}
					>
						Save
					</Button>
        </Form>
      </div>
    );
  }
}
