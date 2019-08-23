{% include "./components/header.tpl" %} 

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