const { Client } = require('pg');

const client = new Client({
  user: 'rafael',
  host: '127.0.0.1',
  database: 'rafael',
  password: '1197122',
  port: 5432,
});

client.connect()
  .then(() => console.log('Connected to database successfully.'))
  .then(() => {
    const query = 'SELECT * FROM estudiantes';
    return client.query(query);
  })
  .then(res => {
    console.log(res.rows);
    client.end();
  })
  .catch(err => {
    console.error(err);
    client.end();
  });