const db = require('./db');
db.select('aiwa',['uniqueName']).then(rows => {
    console.log(rows[0].map(row => row.uniqueName));
});