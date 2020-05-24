const { Pool } = require('pg');
const db = new Pool({
	user     : 'kzbkjuzbftqria',
	host     : 'ec2-34-193-232-231.compute-1.amazonaws.com',
	database : 'dbc6j8d1fjjao1',
	password : '02912f2dde074205f278bdb29aa21621e8b04f787e61ae497ae90f507f736cf1',
	port     : 5432
});

// Query database for all items in pantry
function retrievePantry(user_id) {
	const params = [ user_id ];

	const queryString = `
    SELECT *
    FROM pantries
    WHERE user_id = $1;
  `;

	return db
		.query(queryString, params)
		.then((res) => res.rows[0])
		.catch((err) => console.log('Error retrieving items from pantry!', err));
}

/*

  Concerns:
    - User-defined expiry date, perhaps use a pop-up calendar?
    - User-defined units, perhaps use a dropdown box?

*/

// Add a new item to the pantry
function addItemToPantry(item) {
	const params = [ item.name, item.quantity, item.units ];

	const queryString = `
    INSERT INTO pantries
    (name, quantity, unit)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;

	return db
		.query(queryString, params)
		.then((res) => res.rows[0])
		.catch((err) => console.log('Error adding item to pantry!', err));
}

// Remove an item from the pantry
function removeItemFromPantry(item) {
	const params = [ item.id, item.user_id ];

	const queryString = `
    DELETE
    FROM pantries
    WHERE id = $1
    AND user_id = $2
  `;

	return db
		.query(queryString, params)
		.then((res) => res)
		.catch((err) => console.log('Error removing item from pantry!', err));
}

// exports.retrievePantry = retrievePantry;
module.exports = {
	retrievePantry,
	addItemToPantry,
	removeItemFromPantry
};
