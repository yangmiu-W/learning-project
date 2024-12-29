<template>
  <div class="main-box">
    <div class="messageboard-box">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="您的姓名:">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="预约时间:">
                <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="附加留言:">
                <el-input type="textarea"  maxlength="120" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">点击提交</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
  </div>
</template>

<script>
export default{
    data() {
      return {
        form: {
          name: '',
          date1: '',
          date2: '',
          desc: '',
        },
        text: []
      }
    },
    methods: {
      onSubmit() {
        var xhr = new XMLHttpRequest();
        console.log("state:",xhr);
        xhr.open('POST','192.168.101.113:8080/login',false);
        xhr.send();
        console.log("xhr",xhr);
      }
    }
}
</script>

<style scoped>
.main-box{
    width: 100%;
    height: 300px;
}
.messageboard-box{
    width: 40%;
    height: 100%;
    margin: 0 auto;
    background-color: pink;
}
</style>