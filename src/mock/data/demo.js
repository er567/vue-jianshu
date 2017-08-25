import Mock from 'mockjs';
var baseUrl = 'http://t.com';

//login -------------------------
Mock.mock(baseUrl + '/demo', function(opt) {
    var param = sessionStorage.getItem(opt.url);
    return {
        error: '0',
        msg: '',
        data: {
            demo: 1
        }
    }
});
