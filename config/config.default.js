/* eslint valid-jsdoc: "off" */
let path = require('path');
'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '127.0.0.1',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '',
      // 数据库名
      database: 'egg-example',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_jason123';

  // add your middleware config here
  config.middleware = [];
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: false,
      
    },
    
    
  };

  config.cors = {
    origin:'http://localhost:8082',
    credentials: true,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };

 
 
  config.rememberMe  =  (24 * 60 * 60 * 1000); //选择记住我之后，session有效时长
 
  config.multipart = {
      mode: 'file',
      tmpdir: path.join(appInfo.baseDir, 'app/public/temp'),
  }

  config.session = {
      key: 'EGG_SESS',
      maxAge: 10 * 1000, // 单位毫秒
      httpOnly: true,
      encrypt: true,
  }
 
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};


 
