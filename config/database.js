const mysql = require('mysql2/promise');
require('dotenv').config();

// Database configuration
const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'travel_combo_db',
    port: process.env.DB_PORT || 3306,
    charset: 'utf8mb4',
    timezone: '+07:00',
    
    // Connection pool settings
    connectionLimit: 10,
    acquireTimeout: 60000,
    timeout: 60000,
    reconnect: true,
    
    // SSL settings (for production)
    ssl: process.env.NODE_ENV === 'production' ? {
        rejectUnauthorized: false
    } : false
};

// Create connection pool
const pool = mysql.createPool(dbConfig);

// Test database connection
async function testConnection() {
    try {
        const connection = await pool.getConnection();
        console.log('✅ Database connected successfully');
        connection.release();
        return true;
    } catch (error) {
        console.error('❌ Database connection failed:', error.message);
        return false;
    }
}

// Execute query with error handling
async function executeQuery(sql, params = []) {
    try {
        const [rows] = await pool.execute(sql, params);
        return { success: true, data: rows };
    } catch (error) {
        console.error('Database query error:', error);
        return { success: false, error: error.message };
    }
}

// Execute transaction
async function executeTransaction(queries) {
    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();
        
        const results = [];
        for (const query of queries) {
            const [rows] = await connection.execute(query.sql, query.params || []);
            results.push(rows);
        }
        
        await connection.commit();
        return { success: true, data: results };
    } catch (error) {
        await connection.rollback();
        console.error('Transaction error:', error);
        return { success: false, error: error.message };
    } finally {
        connection.release();
    }
}

// Close database connection
async function closeConnection() {
    try {
        await pool.end();
        console.log('Database connection closed');
    } catch (error) {
        console.error('Error closing database connection:', error);
    }
}

module.exports = {
    pool,
    testConnection,
    executeQuery,
    executeTransaction,
    closeConnection
};
