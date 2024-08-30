//import mysql from 'mysql2/promise'
//require('dotenv').config()
const XLSX = require('xlsx')

// Cria um novo workbook
const workbook = XLSX.utils.book_new();

/*
// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'enviaboleto',
    password: '123456',
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
  })
  
  try {
    
    // For pool initialization, see above
    const [rows, fields] = await pool.query('SELECT * FROM CLIENTE');
  
    // Connection is automatically released when query resolves
    console.log(rows['0']['NOME'])
  
  } catch (err) {
  
    console.log(err)
  
  }

 */ 

// Cria uma nova worksheet
const worksheet = XLSX.utils.json_to_sheet([
    { 'NOME': 'Samuel', 'CPF': '06493906601' },
    { 'NOME': 'Rafael', 'CPF': '121212121124' }

]);


// Adiciona a worksheet ao workbook
XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

// Escreve o workbook em um arquivo XLSX
XLSX.writeFile(workbook, 'example.xlsx');






