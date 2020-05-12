const { Pool } = require('pg');
const db = new Pool({
	user     : 'vagrant',
	password : '123',
	host     : 'localhost',
	database : 'potlucky'
});

// Query database for all items in pantry
function retrievePantry(user_id) {
  const params = [user_id];

  const queryString = `
    SELECT *
    FROM pantries
    WHERE user_id = $1;
  `;

	return db
    .query(queryString, params)
  	.then(res => res.rows[0])
  	.catch(err => console.log('Error retrieving items from pantry!', err);
};

// Add a new item to the pantry
function addItemToPantry(item) {
  const params = [
    item.name,
    item.quantity,
    item.units
  ];

  const queryString = `
    INSERT INTO pantries
    (name, quantity, unit)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;

  return db
    .query(queryString, params)
    .then(res => res.rows[0])
    .catch(err => console.log('Error adding item to pantry!', err));
};

// Remove an item from the pantry
function removeItemFromPantry(item) {
  const params = [
    item.id,
    item.user_id
  ];

  const queryString = `
    DELETE
    FROM pantries
    WHERE id = $1
    AND user_id = $2
  `;

  return db
    .query(queryString, params)
    .then(res => res)
    .catch(err => console.log('Error removing item from pantry!', err));
};

// exports.retrievePantry = retrievePantry;
module.exports = {
  retrievePantry,
  addItemToPantry,
  removeItemFromPantry
};

