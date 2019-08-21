const isLogin = (callback) => {
    return new Promise((resolve,reject)=>{
        axios.get('/user/curuser').then((res) => {
            if (res.data.id) {
                resolve(true);
            }
            else{
                resolve(false);
            }
          })
    })
    
}