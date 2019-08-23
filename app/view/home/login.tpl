  {% include "./components/header.tpl" %}
   <!-- 可选的 Bootstrap 主题文件（一般不用引入） -->
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css"
   integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
 <link rel="stylesheet" href="https://v3.bootcss.com/examples/signin/signin.css" />
  <div class="container">

    <form class="form-signin" action="" onsubmit="return false">
      <h2 class="form-signin-heading">Please login</h2>
      <label for="inputUserName" class="sr-only">UserName address</label>
      <input type="text" id="inputUserName" class="form-control" placeholder="UserName address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="text" id="inputPassword" class="form-control" placeholder="Password" required>

      <div class="checkbox">
        <label>
          <input type="checkbox" id="remember" value="remember-me"> Remember me
        </label>
        <a style="float:right;" href="./register.htm">注册</a>
      </div>

      <button class="btn btn-lg btn-primary btn-block" id="submit" type="submit">login</button>
    </form>

  </div> <!-- /container -->



</body>


<script>
    

  $(document).ready(function () {
    isLogin().then((res)=>{
       if(res){
          location.href = './index.htm'
       }
    })

    $("#submit").click(function () {
      let username = $('#inputUserName').val();
      let password = $('#inputPassword').val();
      let remember = $('#remember').val();

      axios.post('/user/login', {
        username,
        password,
        remember
      }).then((res) => {
        console.log('res', res);
        let { successFlag, errorMsg } = res.data;
        if (successFlag) {
          alert(errorMsg)
          location.href = './post.htm'
        } else {
          alert(errorMsg)
        }
      })


    });
  });
</script>

</html>