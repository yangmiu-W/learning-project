<template>
  <div class="policy-box">
    <div class="side side01">
        <h2>最新政策</h2>
        <ul>
            <li v-for="item in text" :key="item.id">{{ item.title }}</li>
        </ul>
    </div>
    <div class="side side02">
        <h2>政策解读</h2>
        <ul>
            <li v-for="item in text" :key="item.id">{{ item.title }}</li>
        </ul>
    </div>
    <div class="side side03">
        <h2>政策联播</h2>
        <ul>
            <li v-for="item in text" :key="item.id">{{ item.title }}</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        text: []
      }
    },
    mounted(){
        var xhr = new XMLHttpRequest();
        console.log("state:",xhr);
        xhr.open('GET','http://192.168.101.110:8080/news',false);
        xhr.send();
        this.text = JSON.parse(xhr.response)
        console.log("xhr",this.text);
    },
    methods: {
        
    }
}
</script>

<style scoped>
.policy-box{
    width: 1220px;
    height: 657px;
    margin: 0 auto;
    display: flex;
}
.policy-box .side02{
    margin: 0 40px;
}
.policy-box .side{
    width: 380px;
    height: 100%;
    background-color: rgb(247, 247, 247);
}
.policy-box .side h2{
    width: 320px;
    margin: 30px auto 0px;
    font-size: 26px;
    font-weight: normal;
    font-family: "FZZHUNYSK","微软雅黑","宋体";
}
.policy-box .side ul li{
    padding-left: 20px;
    font-size: 18px;
    line-height: 30px;
    list-style-type: square;
    margin-bottom: 15px;
    vertical-align: top;
}
.policy-box .side ul li:hover{
    color: #015293;
    cursor: pointer;
}
</style>