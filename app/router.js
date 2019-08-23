'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  
  router.get('/news', controller.news.list);

  //登录页面
  router.get('/login.htm', controller.home.login);

  //注册页面
  router.get('/register.htm', controller.home.register);

  //首页
  router.get('/index.htm', controller.home.index);
  
  //贴子页面
  router.get('/post.htm', controller.home.post);




  //登录
  router.post('/user/login',controller.user.login);
  //退出登录
  router.post('/user/logout',controller.user.logout);
  //获取当前用户
  router.get('/user/curuser',controller.user.curuser);
  //注册
  router.post('/user/register',controller.user.register);
  //获取session
  router.get('/user/get-session',controller.user.getsession);
  //用户列表
  router.get('/user/list',controller.user.list);
  //贴子管理
  //router.resources('/api/posts', controller.posts);
  router.resources('/api/posts', controller.posts);
};
