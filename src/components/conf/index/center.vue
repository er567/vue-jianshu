<template>
    <el-col :span="4" class="mod-content">
        <section class="showbar">
            <div class="cover-image"></div>
            <div class="text">
                <h1>简书</h1>
                <h3>交流故事，沟通想法</h3>
                <p>一个基于内容分享的社区</p>
                <a href="#"><i class="iconfontcom"></i>提笔写篇文章</a>
            </div>
        </section>
        <section class="article-page">
            <nav>
                <span class="nav-text fir">
                    <a href="#">发现</a>
                </span>
                <span class="nav-text">
                    <a href="#">2015精选</a>
                </span>
                <span class="search clearfloat">
                    <span class="input"><input type="search" placeholder="搜索"></span> 
                    <span class="search-icon"><i class="fa fa-search"></i></span>
                </span>
            </nav>
			<div class="article-list">
				<ul class="btn-group">
					<li v-for="(item,index) in items" :key="index" :class="{'active':item.show===true}" @click="addClass(item,index)"><a>{{item.msg}}</a></li>
				</ul>
				<router-view></router-view>
			</div>
        </section>
    </el-col>
</template>
<script>
import Vue from 'vue'
  export default {
	data(){
		return{
			active:false,
			items:[
				{msg: '热门',show:true,href:'hot'},
				{msg: '新上榜单',show:false,href:1},
				{msg: '日报',show:false,href:2},
				{msg: '七日热门',show:false,href:3},
				{msg: '三十日热门',show:false,href:4},
				{msg: '有奖活动',show:false,href:5},
				{msg: '简书出版',show:false,href:6},
				{msg: '简书播客',show:false,href:7},
				{msg: '时事热闻',show:false,href:8},
				{msg: '专题精选',show:false,href:9}
			]

		}
	} ,
    methods: {
		addClass:function(item,index){
			//console.log(this.items)
			this.items.forEach(function (item) {
				item.show=false;
			});
			item.show=!item.show;

			var self = this;
			//this.bus.$emit('a');
			//this.bus.$$on('qq', function(){})	
			this.$ajax.get('http://t.com/hot', {}).then((res) => {
				console.log(JSON.stringify(res));
			});

		}
	},
	mounted(){}
}
</script>
<style scoped lang="scss">
.mod-content {
	margin-left: 170px;
	height: 100%;
	.showbar {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		width: 450px;
		height: 100%;
		background: pink;
		position: fixed;
		top: 0;
		.cover-image {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: url('./../../../assets/images/vue-demo-bg3.jpg') center center no-repeat;
			background-size: cover;
		}
		.text {
			position: absolute;
			color: #ffffff;
			bottom: 0;
			margin-bottom: 40px;
			line-height: 40px;
			margin-left: 20px;
			text-shadow: rgb(0, 0, 0) 1px 1px 1px;
			h1 {
				font-size: 3em;
			}
			h3,
			p {
				font-size: 1.5em;
			}
			a {
				color: #ffffff;
				text-align: center;
				display: block;
				width: 140px;
				border-radius: 5px;
				height: 40px;
				background-color: #6bd95b;
				font-size: 1.3em;
			}
		}
	}
	.article-page {
		width: 56%;
		height: 100%;
		right: 200px;
		position: absolute;
		background-color: #f3f3f3;
		top: 0;
		nav{
			height: 50px;
    		border-bottom: 2px solid rgba(85, 85, 85, 0.12);
			.nav-text {
				display: inline-block;
				line-height: 50px;
				height: 50px;
				float: left;
				margin-left: 10px;
				padding: 0 15px;
				transition: all 0.3s;
				a{
					font-size: 12px;
					color: #555555;
				}
				&:hover{
					background: #eee;
				}
			}
			.fir{
				border-bottom: 1px solid #000;
			}
		}
		a{
			font-size: 12px;
    		color: #555555;
		}
	}
}
.btn-group {
	text-align: left;
	margin-left: 18px;
	margin-top: 20px;
	li {
	margin: 0 5px;
	display: inline-block;
	padding: 5px 10px;
	border: 1px solid #d9d9d9;
	border-radius: 10px;
	cursor: pointer;
	}
	.active {
		background-color: #de533a;
		a{
			color: #fff;
		}
	}
}
.mod-demo {
	color: red;
}
</style>