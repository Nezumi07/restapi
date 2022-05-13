const bcrypt = require("bcryptjs");
const User = require("../user/userModel")

exports.hashPassword = async (req, res, next) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 8);
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message});
    }
};

// exports.verifyPassword = async (req, res, next) => {
//     try {
//         req.body.password = await bcrypt.compare(req.user.password);
//         next();
//     } catch (error) {
//         console.log(error);
//         res.status(500).send ({error: error.message});
//     }
// }

exports.verifyPassword = async (req, res, next) => {
    const account = await User.findOne({ email: req.body.email })
    if (!account) {
        return res.status(500).send('Cannot find user')
    }
    try {
        if (await bcrypt.compare(req.body.password, account.password)) {
            req.user = account
            next()
        } else {
            res.status(500).send("Invalid password")
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: err.message })
    }
}

