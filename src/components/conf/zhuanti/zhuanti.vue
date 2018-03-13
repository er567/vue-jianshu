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
			<h2 class="ui-title">剩余调休时长查询<span class="tips">(需要跨域)</span></h2>
			<el-form :inline="true" :model="form" class="mod-form-inline">
				<el-form-item label="员工编号">
					<el-input placeholder="请输入员工号" v-model="form.empCode" clearable></el-input>
				</el-form-item>
				<el-form-item label="密码">
					<el-input placeholder="请输入密码" v-model="form.password" type="password" clearable></el-input>
				</el-form-item>
				<el-form-item label="开始日期">
					<el-input placeholder="2018-03-13" v-model="form.vacationStart" type="text" clearable></el-input>
				</el-form-item>
				<el-form-item label="结束日期">
					<el-input placeholder="尽量填写大一点" v-model="form.vocationEnd" type="text" clearable></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit">查询</el-button>
				</el-form-item>
			</el-form>
        </section>
    </el-col>
</template>
<script>
export default {
  data() {
    return {
      loginUrl: "http://192.168.245.46/Home/LoginNew",
      searchUrl: "http://192.168.245.46/BPM/PSGetLeaveCheck",
      form: {
        empCode: "",
        password: "",
        vacationStart: "",
        vocationEnd: ""
      }
    };
  },
  methods: {
    onSubmit() {
      let self = this;
      // self.$ajax.get('http://t.com/1',postData).then(res=>{
      // 	if(res.error==0){
      // 		console.log(res);
      // 	}else{
      // 		this.$message({
      // 			type:'error',
      // 			message:res.msg
      // 		})
      // 	}
      // })
      if (
        self.form.empCode &&
        self.form.password &&
        self.form.vacationStart &&
        self.form.vocationEnd
      ) {
        self.login()
		.then(self.search())
		.catch(function(err) {
		console.log(err);
		});
      } else if (self.form.empCode && self.form.password) {
        self.$message.error("请输入调休时间段!");
      } else if (self.form.vacationStart && self.form.vocationEnd) {
        self.$message.error("请输入正确的用户名和密码!");
      } else {
        self.$message.error("请输入正确的用户名和密码和调休时间段!");
      }
    },
    login() {
      let self = this;
      return new Promise(function(resolve, reject) {
        self.$ajax.post(self.loginUrl, {
          userName: self.form.empCode,
          password: self.form.password,
          btnLogin: "登录"
        }).then(res => {
          //登录
          resolve(res);
          if (res && res.error != 0) reject("something error");
        });
      });
    },
    search() {
      let self = this;
      self.$ajax.post(self.searchUrl, {
          empCode: self.form.empCode,
          vocationType: 250433,
          vacationStart: self.form.vacationStart,
          vocationEnd: self.form.vocationEnd,
          startPeriod: 1,
          endPeriod: 10
        }).then(res => {
        if (!res.hasOwnProperty('message')||!res.rsData.message) {
          self.$message.error("请求失败,请检查是否跨域！");
        }
        let msg = res.rsData.message.split(",")[0];
        self.$message.success(msg);
      });
    }
  }
};
</script>
<style scoped lang="scss">
.mod-content {
  margin-left: 170px;
  height: 100%;
  .showbar {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
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
      background: url("./../../../assets/images/vue-demo-bg2.jpg") center center
        no-repeat;
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
    nav {
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
        a {
          font-size: 12px;
          color: #555555;
        }
        &:hover {
          background: #eee;
        }
      }
      .fir {
        border-bottom: 1px solid #000;
      }
    }
  }
}
.ui-title,
.mod-form-inline {
  margin: 22px 0 0 22px;
}
</style>
