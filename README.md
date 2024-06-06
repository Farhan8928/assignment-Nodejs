# Node.js Technical Test

## Project Setup

1. Clone the repository:
    sh
    git clone <repository_url>
    cd nodejs-technical-test
    

2. Install dependencies:
    sh
    npm install
    

3. Create a db.js file with the database connection details:
    js
    const mysql = require('mysql2/promise');

    const pool = mysql.createPool({
        host: 'nodejs-technical-test.cm30rlobuoic.ap-southeast-1.rds.amazonaws.com',
        user: 'candidate',
        password: 'NoTeDeSt^C10.6?SxwY882}',
        database: 'test',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });

    module.exports = pool;
    

4. Start the server:
    sh
    node server.js
    

## API Endpoint

### GET /api/getVendorUsers

#### Query Parameters:
- prId: Purchase Request ID
- custOrgId: Customer Organization ID

#### Response:
- JSON array of objects containing supplierId, UserName, and Name.

### Error Handling

- Returns 400 if prId or custOrgId are missing.
- Returns 500 for internal server errors.

## Postman Screenshot

![Postman Screenshot](postman_screenshot.png)
