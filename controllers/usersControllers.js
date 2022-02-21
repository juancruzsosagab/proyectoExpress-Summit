const usersModel = require("../models/userModels")
const jwt = require("jsonwebtoken")

module.exports = {
    create: (req, res, next) => {
        console.log(req.body)
        const user = new usersModel({
            full_name: req.body.full_name,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        })
        user.save();
        res.json(user);
    },
    validate: async (req, res, next) => {
        console.log(req.body)
        const user = await usersModel.findOne({ username: req.body.username });
        console.log(user);
        if (user) {
            if (user.password == req.body.password) {
                //Generación de token
                const token = jwt.sign({ userId: user._id }, req.app.get("secretKey"));
                res.json({ token: token });
            } else {
                res.json({ message: "Password incorrecto" })
            }
        } else {
            res.json({ message: "No existe el usuario" })
        }
    },
    getAll: async (req, res, next) => {
        const users = await usersModel.find({});
        res.json(users)
    },
    getById: async (req, res, next) => {
        console.log(req.params.id);
        const user = await usersModel.findById(req.params.id);
        res.json(user);
    },
    update: async (req, res, next) => {
        const user = await usersModel.findOneAndUpdate({ _id: req.params.id }, req.body);
        console.log(req.body);
        res.json(user);
    },
    delete: async (req, res, next) => {
        const user = await usersModel.deleteOne({ _id: req.params.id });
        console.log(req.params.id);
        res.json(user);
    }
}