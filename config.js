import mysql from 'mysql2'
require('dotenv').config()

export async function MySQL() {
  const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    database: process.env.MYSQL_DATABASE,
    password: process.env.MYSQL_PASSWORD
  });
  
  const pool = connection.promise()
  return pool
}