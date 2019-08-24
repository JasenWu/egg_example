const Service = require('egg').Service;

class UserService extends Service {
    async loginAndGetUser(username, password) {
        const user = await this.app.mysql.get('user', {username : username});
        if (!user || user.password !== password){
            return false
        } else {
            return user;
        }
    }


    

    async save(user){
        const userQ =await this.app.mysql.get('user', {username : user.username});
        if (userQ){
            return false
        }else {
            const result =await this.app.mysql.insert('user',user);
            console.log('user',user);
            // 判断插入成功
            const insertSuccess = result.affectedRows === 1;
            if (insertSuccess) {
                return true
            }
        }
        return false
    }

    async list(){
        const users = await this.app.mysql.select('user');
        return users;
    }
}
module.exports = UserService;