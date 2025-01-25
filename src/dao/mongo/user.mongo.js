import userModel from './models/user.models.js'

export default class userMongo {
    constructor() { }

    get = async () => {
        let users = await userModel.find()
        console.log(users)
        return users


    }
    create = async (user) => {
        let userName = user.username
        console.log('16', userName)
        let userNameExist = await userModel.findOne({ username: userName })
        console.log('19', userNameExist)
        if (userNameExist) {
            console.log(`username existe`)
            return (false)
        }
        let newUser = await userModel.create(user);
        return newUser;
    }

    checkUser = async (user) => {
        console.log(user)


        let userNameExist = await userModel.findOne({ username: user }).lean()
        //await userModel.deleteMany({})
        console.log('30 userMongo', userNameExist)
        return userNameExist


    }
    updateUser = (user) => {
        user.pets.push(user._id)
        let doc = { pets: user.pets }
        return userModel.findByIdAndUpdate(user._id, { $set: doc })
    }




}