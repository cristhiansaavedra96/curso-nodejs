import db from '../config/db.js';

const getUsers = async () => {
    const [row, fields] = await db.query('select * from users');
    return row;
}

const getUserById = async (id) => {
    const [row, fields] = await db.query(`select * from users where id = ${id}`);
    return row;
}

const createUser = async (user) => {
    const [row, fields] = await db.query(`insert into users (username, password, email, telefono, nombre) values ('${user.username}','${user.password}', '${user.email}', '${user.telefono}', '${user.nombre}') `)

    return row;
}

const deleteUser = async (id) => {
    const [row, fields] = await db.query(`delete from users where id = ${id}`)
    return row
}

const usersServices = {
    getUsers,
    getUserById,
    createUser,
    deleteUser
}

export default usersServices;