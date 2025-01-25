export default class UsersDTO {
    constructor(result) {
        this.result = result
    }
    get() {
        const userDto = this.result
        return userDto.map((user =>

            user = {
                "_id": user._id,
                "user": user.user,
                "usernema": user.user.username,
                "role": user.role,
                "pets": user.pets
            }
        ))
    }
    create(user) {
        const userDtoCreate = {
            "_id": user._id,
            "user": user.user,
            "username": user.user.username,
            "role": user.role,
            "pets": user.pets,
            "createdAt": user.createdAt,
            "updaedAt": user.updatedAt,
        }

        return userDtoCreate
    }
    checkUser(user) {
        let userName = user.username
        userExist = this.result.map((user) => {
            if (user.username === userName) {
                return userName
            }
        })
        return userName
    }
}

