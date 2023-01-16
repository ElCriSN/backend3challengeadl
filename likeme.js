const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '0l4&nd4_ w3n0o5W',
    database: 'likeme',
    allowExitOnIdle: true
});

const getPosts = async () => {
    const { rows } = await pool.query("SELECT * FROM posts");
    console.log(rows);
    return rows;
}

const addPosts = async (titulo, img, descripcion, likes) => {
    const query = "INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, $4)";
    const values = [titulo, img, descripcion, likes]
    const result = await pool.query(query, values);
    console.log("Posts Adeeeedd =)!!=DDD")
};

module.exports = { getPosts, addPosts };
