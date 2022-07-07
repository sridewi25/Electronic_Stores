const {user} = require('../models');
const {decryptPassword} = require('../helpers/bcrypt')
const {tokenGenerator, tokenVerifier} = require('../helpers/jsonwebtoken')

class UserController{
    static async getAllUser(req,res){
        try {
            let users = await user.findAll();
            res.status(200).json(users)

        }
        catch(err){
            res.status(500).json({message: err.message});
        }
    }
    static async loginuser(req, res){
        try{
            const {user_email, user_password}=req.body
            let user_emailFound = await user.findOne({
                where:{user_email}
            })
            
            if(user_emailFound){
                if(decryptPassword(user_password, user_emailFound.user_password)){
                    let access_token = tokenGenerator(user_emailFound)
                    let verifyToken = tokenVerifier(access_token)
                    res.status(201).json(access_token)
                }
                else{
                    res.status(403).json({
                        message:"Invalid Password"
                    })
                }
            }
            else{
                res.status(404).json({message:"User Not Found"})
            }
        }
        catch(err){
            res.status(500).json({message: err.message});
        }
    }

    static async createUser(req,res){
        try{
            const {user_name,user_email,user_password,user_gender} = req.body
            let users = await user.create({
                user_name,user_email,user_password,user_gender
            })
            res.status(201).json(users)
        }
        catch(err){
            res.status(500).json({message: err.message});
        }
    }
    static async getInfoUser(req,res){
        try{
            const id = Number(req.userData.id)
            
            let users = [await user.findByPk(id)]
            res.status(200).json(users)
        }
        catch(err){
            res.status(500).json({message: err.message});
            
        }
    }
}

module.exports = UserController