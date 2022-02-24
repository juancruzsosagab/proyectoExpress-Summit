const usersModel = require("../models/userModels")
const jwt = require("jsonwebtoken")

module.exports = {
    create: async (req, res, next) => {
        console.log(req.body)
        try {
            const user = new usersModel({
                full_name: req.body.full_name,
                username: req.body.username,
                password: req.body.password,
                email: req.body.email
            })
            const document = await user.save();
            res.status(201).json(document);
        } catch (e) {
            console.log(e)
            next(e);
        }
    },
    validate: async (req, res, next) => {
        console.log(req.body)
        try {
            const user = await usersModel.findOne({ username: req.body.username });
            if (user) {
                if (user.password == req.body.password) {
                    //Generación de token
                    const token = jwt.sign({ userId: user._id }, req.app.get("secretKey"));
                    res.status(200).json({ message: "Ok", token: token });
                } else {
                    res.status(401).json({ message: "Password incorrecto" })
                }
            } else {
                res.status(400).json({ message: "No existe el usuario" })
            }
        } catch (e) {
            next(e);
        }
    },
    getAll: async (req, res, next) => {
        try {
            const users = await usersModel.find({});
            res.status(200).json(users);
        } catch (e) {
            next(e);
        }
    },
    getById: async (req, res, next) => {
        console.log(req.params.id);
        try {
            const user = await usersModel.findById(req.params.id);
            res.status(200).json(user);
        } catch (e) {
            next(e);
        }
    },
    update: async (req, res, next) => {
        console.log(req.body);
        try {
            const user = await usersModel.findOneAndUpdate({ _id: req.params.id }, req.body);
            res.status(201).json(user);
        } catch (e) {
            next(e);
        }
    },
    delete: async (req, res, next) => {
        console.log(req.params.id);
        try {
            const user = await usersModel.deleteOne({ _id: req.params.id });
            res.status(201).json(user);
        } catch (e) {
            next(e);
        }
    }
}