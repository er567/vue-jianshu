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
for(var i=2;i<10;i++){
    Mock.mock(baseUrl + '/' + i, function(opt) {
        // var param = sessionStorage.getItem(opt.url);
        return {
            data
        }
    });
}
