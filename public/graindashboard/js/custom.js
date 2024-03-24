function checkLogin(form) {
    if (form.userName.value === '') {
        form.userName.focus();
        return false;
    }
    if (form.password.value === '') {
        form.password.focus();
        return false;
    }
    return true;
}


function checkRegister(form) {
    if (form.userName.value === '') {
        form.userName.focus();
        return false;
    }
    // if (form.email.value === '') {
    //     form.email.focus();
    //     return false;
    // }
    if (form.password.value === '') {
        form.password.focus();
        return false;
    }
    if (form.password.value !== form.confirmPasswd.value) {
        form.confirmPasswd.focus();
        return false;
    }
    return true;
}


function login() {
    const user_name = document.getElementById('userName').value;
    const password = document.getElementById('password').value;
    const category = {"userName": user_name, "password": password};
    const jsonData = JSON.stringify(category);
    $.ajax({
        type: "post",
        url: "/public/ui/api/login",
        data: jsonData,
        dataType: "json",
        contentType: "application/json;charset=UTF-8",
        success: function (data) {
        }
    });
}

function submitForm(event) {

    event.preventDefault(); // 阻止表单默认提交行为
    const formElement = document.getElementById('loginForm');
    checkLogin(formElement);
    const formData = {
        userName: document.getElementById('userName').value,
        password: document.getElementById('password').value
    };

    fetch('/public/ui/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // 设置请求头部信息，指定发送的数据为 JSON 格式
        },
        body: JSON.stringify(formData) // 将 JavaScript 对象转换为 JSON 字符串
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // 解析响应的 JSON 数据
        })
        .then(data => {
            console.log(data); // 打印响应数据到控制台

            // 可以根据响应数据的内容进行相应的处理
            // 这里假设登录成功后重定向到 index.html 页面
            window.location.href = 'index.html';
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function submitRegisterForm(event) {

    event.preventDefault(); // 阻止表单默认提交行为
    const formElement = document.getElementById('registerForm');
    checkRegister(formElement);
    const formData = {
        userName: document.getElementById('userName').value,
        password: document.getElementById('password').value,
        confirmPasswd: document.getElementById('confirmPasswd').value
    };

    fetch('/public/ui/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // 设置请求头部信息，指定发送的数据为 JSON 格式
        },
        body: JSON.stringify(formData) // 将 JavaScript 对象转换为 JSON 字符串
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // 解析响应的 JSON 数据
        })
        .then(data => {
            console.log(data); // 打印响应数据到控制台

            // 可以根据响应数据的内容进行相应的处理
            // 这里假设登录成功后重定向到 index.html 页面
            window.location.href = 'login.html';
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}