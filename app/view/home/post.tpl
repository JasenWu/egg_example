<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>首页</title>
    <script src="https://cdn.jsdelivr.net/npm/jquery@2.1.0/dist/jquery.min.js"></script>
    <!-- 最新版本的 Bootstrap 核心 CSS 文件 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"
        integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
        crossorigin="anonymous"></script>

    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="../../public/js/tools.js"></script>

    <style>
        .my-table {
            background: #fff;
        }

        .title {
            float: left;
        }

        #loginOut {
            float: right;
            margin: 20px;
            cursor: pointer;
        }
    </style>
</head>

<body>
    <ul class="nav nav-tabs">
        <li role="presentation" class="active"><a href="./index.htm">Users</a></li>
        <li role="presentation"><a href="./post.htm">Posts</a></li>
         
    </ul>
    <ul class="news-view view">
        <section>
            <h4 class="title">用户列表</h4>
            <i class="glyphicon glyphicon-log-in" id="loginOut">&nbsp;退出</i>


        </section>


        <table class="table table-bordered my-table">
            {% for item in uses %}
            <tr>
                <td>
                    {{ item.id }}
                </td>
                <td>
                    {{ item.username }}
                </td>
                <td>
                    {{ item.password }}
                </td>
                <td>
                    {{ item.phone }}
                </td>
                <td>
                    {{ item.avatar_url }}
                </td>
                <td>
                    {{ item.create_time }}
                </td>
                <td>
                    {{ item.update_time }}
                </td>
            </tr>
            {% endfor %}
        </table>

</body>

<script>

    $(document).ready(function () {

        isLogin().then((res) => {
            if (!res) {
                location.href = './login.htm'
            }
        })

        $('#loginOut').click(() => {
            axios.post('/user/logout').then((res) => {
                let { successFlag, errorMsg } = res.data;
                if (successFlag == 'Y') {
                    alert(errorMsg)
                    location.href = './login.htm'
                } else {
                    alert(errorMsg)
                }
            })
        })
    })
</script>

</html>