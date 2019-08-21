'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    let sql = 'SELECT * FROM `user`';
    let values = []
     let users = await this.app.mysql.query(sql, values); // you can access to simple database instance by using app.mysql.
 
    this.ctx.body = {
      users
    };
  }
  async user() {
    let users =  this.ctx.session;
    this.ctx.body = {
      users
    };
  }

  async add() {
    const ctx = this.ctx;
    let count = ctx.cookies.get('count');
    count = count ? Number(count) : 0;
    ctx.cookies.set('count', ++count);
    ctx.session.userId = 'session:' + count;
    ctx.body = count;
  }
  async session(){
    const ctx = this.ctx;
    userId = ctx.session.userId;
    ctx.body = userId
  }

  async remove() {
    const ctx = this.ctx;
    const count = ctx.cookies.set('count', null);
    ctx.status = 204;
  }
}

module.exports = HomeController;
