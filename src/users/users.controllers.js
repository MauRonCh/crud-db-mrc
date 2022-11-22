const usersDB = [];
let id = 1;

// Data
//* {
//*     id: 1,
//*     first_name: 'string',
//*     last_name: 'string',
//*     email: 'string',
//*     password: 'string',
//*     birthday: 'YYYY/MM/DD'
//* }

const getAllUsers = () => {
    return usersDB;
}

const findUserById = (id) => {
    const data = usersDB.find(x => x.id == id);
    return data;
}

const createNewUser = (obj) => {
    const newUser = {
        first_name: obj.first_name,
        last_name: obj.last_name,
        email: obj.email,
        password: obj.password,
        birthday: obj.birthday
    }
    if (Object.keys(newUser).length != Object.keys(obj).length) {
        return null;
    }
    newUser.id = id++;
    usersDB.push(newUser);
    return newUser;
}

module.exports = {
    getAllUsers,
    findUserById,
    createNewUser
}