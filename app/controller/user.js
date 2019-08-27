//app/controller/user.js
const Controller = require('egg').Controller;
const fs = require('mz/fs');

class UserController extends Controller{
    async getsession(){
        this.ctx.body = {
            ...this.ctx.session.user
        }
    }

    async curuser(){

        this.ctx.body = {
            ...this.ctx.session.user
        }
    }


    async login(){
        const ctx = this.ctx;
      
        const { username, password, rememberMe } = ctx.request.body;
        const user = await ctx.service.user.loginAndGetUser(username, password);
        if (!user){
            ctx.body = {
                retCode:401,
                retMsg:'用户名或密码错误！'
             
            }
        }else {
            
            // 如果用户勾选了 `记住我`，设置 的过期时间
            if (rememberMe) {
                ctx.session.maxAge = this.config.rememberMe
            };
             

            // 设置 Session
            ctx.session.user = {
               
                    ...user
                
            };
             
            ctx.body = {
                retCode:0,
                retMsg:'登录成功！',
                retData:{
                  ...ctx.session.user
                 
                }
                
            };
           
        }
    }

    async logout(){
        const {ctx} = this;

        ctx.session.user = {};

        ctx.body = {
            retCode:0,
            retMsg:'注消成功！',
            retData:{
              
            }
            
        };

        
    }

    async register(){
        const ctx = this.ctx;
        const { username, password,phone } = ctx.request.body;
       // const avatar = ctx.request.files[0];
       const avatar = null
        //默认头像
        let filepathNew = this.config.baseDir+'\\app\\public\\avatar\\default.png';
        //如果用户上传了头像
        if (avatar) {
            let filenameNew = ctx.helper.uuid() +'.'+  avatar.filename.split('.').pop();
            filepathNew = this.config.baseDir+'\\app\\public\\avatar\\'+filenameNew;
            //把临时文件剪切到新目录去
            await fs.rename(avatar.filepath, filepathNew);
        }

        const nowTime = new Date();
        const userNew = {
            id : ctx.helper.uuid(),
            username : username,
            password : password,
            phone,
            avatar_url : filepathNew.split("\\app")[1],
            create_time : nowTime,
            update_time : nowTime
        };

        

        const flag = await ctx.service.user.save(userNew);


        if (flag){
            // 设置 Session
            ctx.session.user = {username:username};
            ctx.cookies.set('avatarUrl',userNew.avatar_url,{httpOnly:false});
            ctx.body = {
                successFlag:'Y',
                errorMsg:'注册成功！'
            };
             
        }else {
            ctx.body = {
                successFlag:'N',
                errorMsg:'用户名已存在！'
            }
        }
    }

    async list(){
        this.ctx.body = {
            ...this.ctx.session.user
        }
        
      
       
        // if(this.ctx.session.user.id){
        //     // let {ctx} = this;
        //     // const users = await ctx.service.user.list();
        //     ctx.body =  [];
        // }else{
        //     ctx.body =  [];
        // }
       
         
    }
}

module.exports = UserController;