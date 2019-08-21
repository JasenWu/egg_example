const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index(){
        let uses = []

        if(this.ctx.session.user && this.ctx.session.user.id){
            uses = await this.service.user.list();
        } 
 
        await this.ctx.render('home/index.tpl',{uses});
    }

    async post(){
        let uses = []

        if(this.ctx.session.user && this.ctx.session.user.id){
            uses = await this.service.user.list();
        } 
 
        await this.ctx.render('home/post.tpl',{uses});
    }


    async login(){
        await this.ctx.render('home/login.tpl')
    }

    async register(){
        await this.ctx.render('home/register.tpl')
    }
}
module.exports = HomeController;