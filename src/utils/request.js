import axios from "axios";
import {router} from './../router/router';



let baseurl = 'https://api.uxsw.cn/local/v1/user';

const REQUEST = (url, method, data = {}) => {
    return new Promise((resolve, reject) => {
        //取缓存
        let token = localStorage.getItem('token')||'';

        axios({
            method: method,
            url: baseurl + url,
            headers: {
                'Authorization': token
            },
            data: data
        })
            .then(function (res) {
                //console.log(res);
                if (res.data.code == 401) {
                    //拦截 跳到登录页面
                    console.log('!!!页面请求没有token 去登录');
                    router.push({path:'/login'});
                } else {
                    //如果token更新了
                    if (res.data.token) {
                        //存缓存
                        localStorage.setItem('token', res.data.token);
                    }

                    resolve(res.data);
                }
            })
            .catch(function (error) {
                reject(error)
            });



    })
};

export {
    REQUEST
}