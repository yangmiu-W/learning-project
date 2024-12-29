<template>
  <div>
    <el-carousel height="500px">
      <el-carousel-item v-for="item in Image.src" :key="item.id">
        <img :src="item.qwe" alt="春耕" style="width: 100%; height: 100%;">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
    data(){
        return{
           input:''
        }
    },
    computed:{
      Image(){
        return{
          src:[
            {id:1,qwe:'https://gd-hbimg.huaban.com/01ec537d5ac6d267c1d9312d68ee7a13cd840ec121536-AQgGwU_fw1200'},
            {id:2,qwe:'https://gd-hbimg.huaban.com/a36950258c2418c6d5080e45d91724fb886bd4b15c82d-Q7VHWT_fw1200webp'},
            {id:3,qwe:'https://gd-hbimg.huaban.com/5a1a5cbb5235598d23a3c53b861edda4b2db60b2242de-XS1VpJ_fw1200webp'},
            {id:4,qwe:'https://gd-hbimg.huaban.com/2f847b46e3fca6c4ac9624e1d5557cbb4d7a07a2487bb-tq71tz_fw1200webp'}
          ],
          name:[
            {se:'百农兴首页'},
            {se:'智能温室玻璃大棚'},
            {se:'生态酒店'},
            {se:'产业展示'},
            {se:'工程案例'},
            {se:'温室知识'},
            {se:'走进百农兴'},
            {se:'联系我们'}
        ]
        }
      }
    },
    methods:{
      
    }
}
</script>

<style>

</style>