<template>
	<el-row>
		<left></left>
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
		<right></right>
	</el-row>
</template>

<script>
import left from './left.vue'
import right from './right.vue'
import Vue from 'vue'
var bus = new Vue();
export default {
	data() {
		return {
			bus
		}
	},
	components: {
		left,right
	}
}
</script>

<style lang="scss">
body {
	background: #f3f3f3;
}
.search {
    line-height: 50px;
    float: right;
	input {
		padding-right: 10px;
		padding-left: 10px;
		width: 160px;
		height: 25px;
		border: 1px solid #efefef;
		border-radius: 10px;
	}
}
.el-row {
	height: 100%;
}
.rightbar {
    width: 200px;
    height: 100%;
    right: 0;
    position: fixed;
    z-index: 10;
    background-color: #f3f3f3;
	top: 0;
		nav {
		padding: 15px 2px 5px 10px;
		margin-right: 15px;
		float: right;
		font-size: 14px;
		a{
			color: #555;
		}
	}
}
.fade-enter-active, .fade-leave-active {
	transition: opacity .15s;
}
.fade-enter, .fade-leave-to {
	opacity: 0;
}
</style>

