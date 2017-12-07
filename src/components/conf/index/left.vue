<template>
    <el-col :span="4">
        <el-menu mode="vertical" default-active="1" class="mod-left">
            <router-link to="/index">
                <el-menu-item index="首页">
                    <i class="el-icon-message"></i>首页
                </el-menu-item>
            </router-link>
            <router-link to="/zhuanti">
                <el-menu-item index="专题">
                    <i class="el-icon-menu"></i>专题
                </el-menu-item>
            </router-link>
            <router-link to="/download">
                <el-menu-item index="下载手机应用">
                    <i class="el-icon-setting"></i>下载手机应用
                </el-menu-item>
            </router-link>
            <el-menu class="left-bottm">
                <el-menu-item index="显示模式">
                    <i class="el-icon-message"></i>显示模式
                </el-menu-item>
                <el-menu-item index="登录">
                    <i class="el-icon-menu"></i>登录
                </el-menu-item>
            </el-menu>
        </el-menu>
    </el-col>
</template>

<script>
export default {
    methods: {
        // handleOpen(key, keyPath) {
        //     console.log(key, keyPath);
        // },
        // handleClose(key, keyPath) {
        //     console.log(key, keyPath);
        // }
    }
}
</script>
<style scoped lang="scss">
.mod-left {
    width: 170px;
    height: 100%;
    position: fixed;
    top: 0px;
    background-color: #2a2a2a;
    .left-bottm {
        width: 100%;
        background-color: #2a2a2a;
        position: absolute;
        bottom: 0;
    }
    li {
        color: #999;
        &:hover {
            background: #e78170;
            color: #fff;
        }
    }
}
</style>

