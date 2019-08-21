'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/user', controller.home.user);
  router.get('/add', controller.home.add);
  router.get('/remove', controller.home.remove);
  router.get('/session', controller.home.session);

  router.resources('posts','/posts', controller.posts);



};
