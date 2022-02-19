const { getMaxListeners, addListener } = require("../models/userModels")
const usersModels = require("../models/userModels")

module.exports = {
    getAll: (req, res, next) => {
        console.log(req.body)
    },
    getById: (req, res, next) => {
        console.log(req.body)
    },
    create: (req, res, next) => {
        console.log(req.body)
        const user = new usersModels({
            name: "Juan",
            user: "Juan",
            email: "juancruz.sosag@gmail.com"
        })
        user.save();
        res.json(user)
    },
    delete: (req, res, next) => {
        console.log(req.body)
    },
    update: (req, res, next) => {
        console.log(req.body)
    }
}