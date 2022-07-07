const bcrypt = require('bcrypt');
const saltRound = 7;
const salt = bcrypt.genSaltSync(saltRound);

const encryptPassword = (data) => {
    return bcrypt.hashSync(data,salt)
}

const decryptPassword = (data,hashPassword) => {
    return bcrypt.compareSync(data, hashPassword)
}

module.exports = {
    encryptPassword, decryptPassword
}