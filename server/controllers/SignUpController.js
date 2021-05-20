const User = require("../models/model");
const bcrypt = require('bcryptjs')

const signUpController = async(req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body

        

        const existingUser = await User.findOne({ email })

        if(existingUser) {
            return res.status(400).json({
                errorMessage: "An Account with this email already exist."
            })
        }

        const salt = await bcrypt.genSalt()
        const hashPassword =  await bcrypt.hash(password, salt)

        const newUser = new User({
            firstname, 
            lastname,
            email,
            password:hashPassword
        })

        const savedUser = await newUser.save()
         res.send (savedUser)
    } catch (error) {
        console.log({error: error.message});
    }
}

module.exports = signUpController