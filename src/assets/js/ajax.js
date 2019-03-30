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

var ajax = function(type, url, data, headers) {
    if (!isPro) {
        sessionStorage.setItem(url, JSON.stringify(data));
        type = 'post'
    };
    if (type == 'post') {
        // let option = {
        //     method: type,
        //     headers: headers,
        //     url: url,
        //     data: querystring.stringify(data)
        // }
        data = querystring.stringify(data)
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
    get: (url, data, headers) => ajax('get', url, data, headers),
    post: (url, data, headers) => ajax('post', url, data, headers),
    jsonp: (url, data, headers) => {
        if (isPro) {
            return new Promise(
                function(resolve, reject) {
                    jsonp(url, data, function(err, res) {
                        resolve(res);
                    })
                }
            )
        } else {
            return ajax('get', url, data, headers);
        }
    }
};
