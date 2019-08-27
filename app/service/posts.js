const Service = require('egg').Service;

class PostsService extends Service {
    async index() {
        const posts =await this.app.mysql.select('posts');
        return posts;
    }

    async show(data) {
        const d =await this.app.mysql.get('posts',data);
        
        return {
            retCode:0,
            retMsg:'成功',
            retData:d
        };

        
    }

    async create(data) {
        const d =await this.app.mysql.insert('posts',data);
        if(d.affectedRows == 1)
        return {
            retCode:0,
            retMsg:'成功',
            retData:d
        };

        
    }

    async delete(data) {
        const d =await this.app.mysql.delete('posts',data);

        if(d.affectedRows == 1)
        return {
            retCode:0,
            retMsg:'成功',
            retData:d
        };
  
    }

    async update(data) {
        const d = await this.app.mysql.update('posts',data);

        if(d.affectedRows == 1)
        return {
            retCode:0,
            retMsg:'成功',
            retData:d
        };

        
    }

  


 
}
module.exports = PostsService;