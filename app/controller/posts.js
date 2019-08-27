 
var fs = require('fs');
var path = require('path');

exports.index = async (ctx) => {
   const data =  await ctx.service.posts.index();

   ctx.body ={
       retCode:0,
       retData:data,
       retMsg:'成功'
   }
   
};

 

exports.create = async (ctx) => {
    const data =  await ctx.service.posts.create({
        ...ctx.request.body
    });
    ctx.body = data;

};

exports.show = async (ctx) => {
    const data =  await ctx.service.posts.show({
        id:ctx.params.id
    });
    ctx.body = data;
};

exports.edit = async () => {};

exports.update = async (ctx) => {
    let params = {
        ...ctx.params,
        ...ctx.request.body
    }
    
    const data =  await ctx.service.posts.update(params);
    ctx.body = data;
};

exports.destroy = async (ctx) => {
    let params = {
        id:ctx.params.id
    }
    const data =  await ctx.service.posts.delete(params);
    ctx.body = data;

    
     
};


exports.upload = async (ctx) =>{
    let file = ctx.request.files[0];

    var sourceFile = path.resolve(file.filepath);
    let basePath = `public/uploads/${file.filename}`;
    let filePath = `app/${basePath}`;
 
    var destPath = path.join(ctx.app.baseDir,filePath);

    const moveFile = async ()=>{
        return new Promise((resolve,reject)=>{
            fs.rename(sourceFile, destPath, function (err) {
                fs.stat(destPath, function (err, stats) {
                  if (err) throw err;
                  resolve(1);
                });
            });
        })
    }
   let r = await moveFile();
    if(r === 1){
        ctx.body = {
            retCode:0,
            retMsg:'上传成功!',
            retData:{
                basePath
            }
          }
    }
  


   

     

     
      
}