const jwt = require('jsonwebtoken');
const secretCode = process.env.SECRET_CODE || 'stores';

const tokenGenerator = (data) => {
    const {id,user_name,user_email,user_gender,user_type} = data 
    return jwt.sign({
        id,user_name,user_email,user_gender,user_type
    },secretCode)
}

const tokenVerifier = (data) => {
    return jwt.verify(data, secretCode)

}

module.exports = {
    tokenGenerator,tokenVerifier
}