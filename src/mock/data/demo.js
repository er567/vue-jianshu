import Mock from 'mockjs';
import data from './json/2.json'
var baseUrl = 'http://t.com';

//login -------------------------
Mock.mock(baseUrl + '/1', function(opt) {
    // var param = sessionStorage.getItem(opt.url);
    return {
        error:0,
        msg:'请求成功',
        data
    }
});
