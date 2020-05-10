const { Pool } = require('pg');
const pool = new Pool({
	user     : 'vagrant',
	password : '123',
	host     : 'localhost',
	database : 'potlucky'
});
// module.exports = {
// 	query : (text, params) => {
// 		return pool.query(text, params);
// 	}
// };

function viewPantry(user_id) {
	return pool
		.query(
			`
    SELECT * FROM pantries
    where user_id = '${user_id}';
    `
		)
		.then((res) => res.rows[0])
		.catch((err) => console.log(err));
}
exports.viewPantry = viewPantry;
