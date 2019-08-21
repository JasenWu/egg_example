<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Login</title>
  <script src="https://cdn.jsdelivr.net/npm/jquery@2.1.0/dist/jquery.min.js"></script>
  <!-- 最新版本的 Bootstrap 核心 CSS 文件 -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
    integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

  <!-- 可选的 Bootstrap 主题文件（一般不用引入） -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css"
    integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
  <link rel="stylesheet" href="https://v3.bootcss.com/examples/signin/signin.css" />
  <!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"
    integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
    crossorigin="anonymous"></script>


  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

  <script src="../../public/js/tools.js"></script>

</head>

<body>
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
            location.href = './index.htm'
          } else {
            alert(errorMsg)
          }
        })


      });
    });
  </script>

</body>

</html>