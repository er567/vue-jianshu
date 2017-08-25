import index from '@/components/conf/index/index.vue'
export default {
    path: '/index',
    redirect: '/center',
    component: index,
    name: 'index',
    iconCls: 'el-icon-message',
    children: [{
        path: '/center',
        component: resolve => require(['@/components/conf/index/center.vue'], resolve),
        hidden: true,
        name: '首页'
        },{
        path: '/zhuanti',
        component: resolve => require(['@/components/conf/zhuanti/zhuanti.vue'], resolve),
        hidden: true,
        name: '专题'
    },{
        path: '/download',
        component: resolve => require(['@/components/conf/download/download.vue'], resolve),
        hidden: true,
        name: '下载'
    }]
}
