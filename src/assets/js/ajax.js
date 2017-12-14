/**
 * @file ajax.js
 * @synopsis  ajax
 * @author licuiting, 250602615@qq.com
 * @version 1.0.0
 * @date 2017-07-23
 */

import Vue from 'vue'
import Promise from 'promise'
import axios from 'axios'
import jsonp from 'jsonp';
import querystring from 'querystring';
import { Message } from 'element-ui'
var isPro = (process.env.NODE_ENV === 'production');
(axios.defaults.withCredentials=true); 

var ajax = function(type, url, data) {
    if (!isPro) {
        sessionStorage.setItem(url, JSON.stringify(data));
        type = 'post'
    };
    if (type == 'post') {
        data = querystring.stringify(data);
    }
    if (type == 'get') {
        data = {
            params: data
        }
    }
    return axios[type](url, data).then((res) => {
        return res.data;
    }).catch((err)=>{
        Message.error(err.message)
    })
}

//ajax
Vue.prototype.$ajax = {
    get: (url, data) => ajax('get', url, data),
    post: (url, data) => ajax('post', url, data),
    jsonp: (url, data) => {
        if (isPro) {
            return new Promise(
                function(resolve, reject) {
                    jsonp(url, data, function(err, res) {
                        resolve(res);
                    })
                }
            )
        } else {
            return ajax('get', url, data);
        }
    }
};
