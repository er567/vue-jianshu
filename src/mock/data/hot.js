import Mock from 'mockjs';
var baseUrl = 'http://t.com';

//login -------------------------
Mock.mock(baseUrl + '/hot', function(opt) {
    var param = sessionStorage.getItem(opt.url);
    return {
        error: '0',
        msg: '',
        data: {
            author:'徐丹妮',
			title:'我不是学霸，只是比你努力一点而已',
			time:'大约6小时之前',
			read:'8498',
			comment:'248',
			like:'2342',
			pay:'2',
			src: '../../static/vue-demo-hot.jpg'
        }
    }
});
