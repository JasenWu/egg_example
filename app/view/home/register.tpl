{% include "./components/header.tpl" %}
<!-- 可选的 Bootstrap 主题文件（一般不用引入） -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css"
integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
<link rel="stylesheet" href="https://v3.bootcss.com/examples/signin/signin.css" />

    <div class="container">

        <form class="form-signin" action="" onsubmit="return false">
          <h2 class="form-signin-heading">Please sign up</h2>

          <label for="inputUserName" class="sr-only">UserName address</label>
          <input type="text" id="inputUserName" class="form-control" placeholder="UserName address" required autofocus>
          <br />
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="text" id="inputPassword" class="form-control" placeholder="Password" required>
          <br />
          <label for="inputPassword" class="sr-only">Phone</label>
          <input type="text" id="inputPhone" class="form-control" placeholder="Phone" required>
          <br />
         
         
          <button class="btn btn-lg btn-primary btn-block" id="submit" type="submit">sign up</button>
          <br />
          <a style="float:right;text-align: center;display: block;width:100%;" href="./login.htm">去登录</a>
        </form>
  
      </div> <!-- /container -->


   
  
</body>
<script>
      
  $(document).ready(function(){ 
    $("#submit").click(function(){
        let username = $('#inputUserName').val();
        let password = $('#inputPassword').val();
        let phone = $('#inputPhone').val(); 
       
        axios.post('/user/register',{
            username,
            password,
            
          
        }).then((res)=>{
            console.log('res',res);
            let {successFlag,errorMsg} = res.data;
            if(successFlag){
              alert(errorMsg)
            }else{
              alert(errorMsg)
            }
        })

     
    });
  });
  </script>
</html>