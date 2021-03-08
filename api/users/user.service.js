const pool = require('../../config/database');

module.exports = {
    create: (data, callback) => {
        pool.query(
            `INSERT INTO users(name,email,country,password) VALUES (?,?,?,?)`, [
                data.name,
                data.email,
                data.country,
                data.password
            ],
            (error, results, fields) => {
                if (error) {
                    callback(error);
                }
                return callback(null, results);
            }
        );
    },
    getUsers: callback => {
        pool.query(
            `select id,name,email,country from users`, [],
            (error, results, fields) => {
                if (error) {
                    callback(error);
                }
                return callback(null, results);
            }
        )
    },
    getUserById: (id, callback) => {
        pool.query(
            `select id,name,email,country from users where id = ?`, [id],
            (error, results, fields) => {
                if (error) {
                    callback(error);
                }
                return callback(null, results[0]);
            }
        )
    },
    updateUser: (data, callback) => {
        pool.query(
            `update users set name=?,email=?,country=?,password=? where id = ?`, [data.name, data.email, data.country, data.password, data.id],
            (error, results, fields) => {
                if (error) {
                    callback(error);
                }
                return callback(null, results[0]);
            }
        )
    },
    deleteUser: (data, callback) => {
        pool.query(
            `delete from users where id = ?`, [data.id],
            (error, results, fields) => {
                if (error) {
                    callback(error);
                }
                return callback(null, results[0]);
            }
        )
    },
    getUserByEmail: (email, callback) => {
        pool.query(
            `select * from users where email = ?`, [email],
            (error, results, fields) => {
                if (error) {
                    callback(error);
                }
                return callback(null, results[0]);
            }
        )
    }
};