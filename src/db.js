import pg from 'pg';

const db = new pg.Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,  // Corrected the user field
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

db.connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch(err => console.error('Database connection error:', err));

export default db;
