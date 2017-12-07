import Mock from 'mockjs';
import data from './json/1.json'
var baseUrl = 'http://t.com';

//login -------------------------
Mock.mock(baseUrl + '/0', function(opt) {
    // var param = sessionStorage.getItem(opt.url);
    return {
        data
    }
});
