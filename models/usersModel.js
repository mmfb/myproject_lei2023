class User {
    constructor(id,name,email,password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static async getAll() {
        try {
            let result = [];
            for(let user of users ){
                result.push(new User(user.id,user.name,user.email));
            }
            return {status: 200, result: result};
        } catch (err) {
            console.log(err);
            return {status: 500, result: err };
        }
    }


}

const users = [
    new User(1,"John","john@mail.com", "123"),
    new User(2,"Mary","mary@m.pt","abc"),
    new User(3,"Bob","bob@mail.pt","god")
];

module.exports = User;