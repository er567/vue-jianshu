<template>
  <section class="article-page">
    <nav>
      <span class="nav-text fir">
        <a href="#">欢乐斗地主</a>
      </span>
      <span class="nav-text">
        <a href="#">欢乐麻将</a>
      </span>
      <span class="search clearfloat">
        <span class="input">
          <input type="search" placeholder="搜索">
        </span>
        <span class="search-icon">
          <i class="fa fa-search"></i>
        </span>
      </span>
    </nav>
    <div class="article-list">
      <ul class="btn-group">
        <li
          v-for="(item,index) in items"
          :key="index"
          :class="{'active':item.show===true}"
          @click="addClass(item,index)"
        >
          <a>{{item.msg}}</a>
        </li>
      </ul>
      <articleCp></articleCp>
    </div>
  </section>
</template>
<script>
import Vue from "vue";
import articleCp from "./article.vue";
import _ from "lodash";

export default {
  components: {
    articleCp
  },
  data() {
    return {
      active: false,
      items: [
        { msg: "ios", show: true, href: "hot" },
        { msg: "android", show: false, href: 1 },
      ]
    };
  },
  methods: {
    addClass: function(item, index) {
      //console.log(this.items)
      this.items.forEach(function(item) {
        item.show = false;
      });
      item.show = !item.show;

      var self = this;
      //this.bus.$emit('a');
      //this.bus.$$on('qq', function(){})
      this.$ajax.get("http://t.com/" + index, {}).then(res => {
        console.log(JSON.stringify(res.data.yan));
        alert(JSON.stringify(res.data.yan));
      });
    }
  },
  mounted() {
    // var ownerArr = [{
    // 	"owner": "Colin",
    // 	"pets": [{ "name": "dog1" }, { "name": "dog2" }]
    // }, {
    // 	"owner": "John",
    // 	"pets": [{ "name": "dog3" }, { "name": "dog4" }]
    // }];
    //_.map(ownerArr, 'pets[0].name');
  }
};
</script>
<style scoped lang="scss">
.mod-content {
  height: 100%;
  .article-page {
    width: 85%;
    height: 100%;
    background-color: #f3f3f3;
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
    a {
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
    a {
      color: #fff;
    }
  }
}

.mod-demo {
  color: red;
}
</style>