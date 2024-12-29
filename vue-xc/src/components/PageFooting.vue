<template>
  <div class="page-footing-box">
    <div class="footing-main">
        <div class="footing-top">
            <div class="footing-left">
                <ul>
                    <li style="font-size: 15px; letter-spacing: 10px;">陆志华陆总现代农业科技有限公司</li>
                    <li style="font-size: 10px;">SHANXI BAINONGXING MODERN AGRICULTURAL ENGINEERING CO.LTD.</li>
                </ul>
            </div>
            <div class="footing-right">
                <div class="footing-right-one">
                    <ul>
                        <li>产品展示</li>
                        <li>智能玻璃温室大棚</li>
                        <li>生态酒店</li>
                        <li>暖梯</li>
                        <li>网购厂房</li>
                    </ul>
                </div>
                <div class="footing-right-two">
                    <ul>
                        <li>直通车</li>
                        <li>直通车</li>
                    </ul>
                </div>
                <div class="footing-right-three">
                    <ul>
                        <li>新闻资讯</li>
                        <li>企业新闻</li>
                        <li>行业新闻</li>
                        <li>疑问解答</li>
                    </ul>
                </div>
                <div class="footing-right-four">
                    <ul>
                        <li>关于我们</li>
                        <li>公司简介</li>
                        <li>荣誉资质</li>
                        <li>联系我们</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footing-bottom">
            <p>版权所有:XXXXXXXXX归所有 备案号:粤ICPXXXXXXX</p>
            <p>联系人:陆先生 手机:__ 邮箱:__</p>
            <p>地址:广东省江门市广东南方职业学院</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* 主容器 */
.page-footing-box{
    width: 100%;
    height: 400px;
    padding-top: 70px;
    color: rgb(220, 220, 220);
    background-color: #515151;
}
/* 副容器 */
.page-footing-box .footing-main{
    width: 62%;
    height: 80%;
    margin: 0 auto;
}
/* 副容器-上 */
.page-footing-box .footing-main .footing-top{
    width: 100%;
    height: 50%;
    display: flex;
}
/* 副容器-上(左) */
.page-footing-box .footing-main .footing-top .footing-left{
    width: 40%;
    height: 100%;
    text-align: center;
    border-right: 2px solid #767676;
}
.page-footing-box .footing-main .footing-top .footing-left ul{
    padding: 0;
    padding-top: 50px;
}
/* 副容器-上(右) */
.page-footing-box .footing-main .footing-top .footing-right{
    width: 60%;
    height: 100%;
    display: flex;
}
.page-footing-box .footing-main .footing-top .footing-right div{
    width: 25%;
    height: 100%;
}
.page-footing-box .footing-main .footing-top .footing-right div ul li:nth-child(1){
    font-size: 18px;
    font-weight: bold;
}
.footing-right div ul li:nth-child(n+2){
    color: #979797;
}
.footing-right div ul li:nth-child(n+2):hover{
    color: rgb(0, 152, 69);
    cursor: pointer; 
}
/* 副容器-下 */
.page-footing-box .footing-main .footing-bottom{
    width: 100%;
    height: 50%;
    color: #767676;
    text-align: center;
    font-size: 10px;
    margin-top: 20px;
    border-top: 2px solid #767676;
}
</style>