 
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