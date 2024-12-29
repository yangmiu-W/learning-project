<template>
  <el-container>
    <el-header>
      <div class="box">
        <div class="list-left">
          <router-link to="/">{{ name[0].se }}</router-link>
          <router-link to="">{{ name[1].se }}</router-link>
          <router-link to="">{{ name[2].se }}</router-link>
          <router-link to="">{{ name[3].se }}</router-link>
        </div>
        <div class="main-box">
          <h1>百农兴</h1>
          <p>BAINONGXING</p>
        </div>
        <div class="list-right">
          <router-link to="">{{ name[4].se }}</router-link>
          <router-link to="">{{ name[5].se }}</router-link>
          <router-link to="" @click="drawer = true">{{
            name[6].se
          }}</router-link>
          <router-link to="/login" class="login" @click="qwe">{{
            name[7].se
          }}</router-link>
        </div>
        <el-drawer class="drawer" title="联系我们" :visible.sync="drawer">
          <span>电话:12345678910</span>
        </el-drawer>
      </div>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      name: [
        { id: 1, se: "百农兴首页" },
        { id: 2, se: "智能温室玻璃大棚" },
        { id: 3, se: "生态酒店" },
        { id: 4, se: "产业展示" },
        { id: 5, se: "工程案例" },
        { id: 6, se: "走进百农兴" },
        { id: 7, se: "联系我们" },
        { id: 8, se: "登录/注册" },
      ],
      drawer: false,
    };
  },
  components: {},
  methods: {
    qwe() {
      this.dialogTableVisible;
      console.log("qwe", this.dispatchEvent);
    },
    open() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style scoped>
/* 联系我们弹窗样式 */
.drawer {
  line-height: 100px;
  text-align: center;
}
/* 主容器 */
.box {
  width: 100%;
  min-width: 1200px;
  display: flex;
  justify-content: center;
}
/* 中间列表 */
.box .main-box {
  width: 210px;
  height: 200px;
  z-index: 99;
  color: white;
  text-align: center;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  background-color: rgb(0, 152, 69);
}
.box .main-box h1 {
  margin: 0;
  padding-top: 50px;
}
/* 左右列表 */
.box .list-left,
.list-right {
  width: 650px;
  height: 80px;
  line-height: 80px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
}
.box .list-left a {
  margin: 0 20px;
}
.box .list-right a {
  margin: 0 20px;
}
a {
  color: black;
  text-decoration: none;
}
a:hover {
  color: rgb(0, 152, 69);
  cursor: pointer;
}
h2 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  unicode-bidi: isolate;
}
</style>