const crypto = require("crypto");
const { readDb, writeDb } = require("../db/store");

function toPublicUser(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    provider: user.provider,
    createdAt: user.createdAt,
  };
}

async function findByEmail(email) {
  const { rows } = await pool.query("SELECT * FROM users WHERE email = $1", [email.toLowerCase()]);
  return rows[0] || null;
}

async function findById(id) {
  const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  return rows[0] || null;
}

async function createUser({ name, email, passwordHash, provider }) {
  const { rows } = await pool.query(
    `INSERT INTO users (name, email, password_hash, provider)
     VALUES ($1, $2, $3, $4) RETURNING *`,
    [name, email.toLowerCase(), passwordHash, provider]
  );
  return rows[0];
}

module.exports = { toPublicUser, findByEmail, findById, createUser };
