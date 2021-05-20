const User = require("../models/model");
const bcrypt = require("bcryptjs")

const loginController = async(req, res) => {
    try {
        const { email, password } = req.body

        const existingUser = await User.findOne({ email })

        if(!existingUser)
            return res.status(401).json({ errorMessage: "Wrong Email !"})

        /* const passwordCorrect = await bcrypt.compare(password, existingUser.password)

        if(!passwordCorrect)
            return res.status(401).json({ errorMessage: "Wrong email or password!"})
 */
        res.json({ existingUser })
    } catch (error) {
        console.log({error: error.message});
    }
}

module.exports = loginController