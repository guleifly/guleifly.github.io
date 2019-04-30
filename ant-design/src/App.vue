<template>
    <div id="app">
        <a-layout id="components-layout-demo-custom-trigger" class="home-layout">
            <a-layout-sider
                    :trigger="null"
                    collapsible
                    width="140"
                    collapsedWidth="60"
                    class="home-layout-side"
                    v-model="collapsed">
                <div class="collapside">
                    <img v-if="!collapsed" src="./assets/img/icon_guide_back@1x.png" alt="" class="coll-img" @click="()=> collapsed = !collapsed">
                    <img v-else src="./assets/img/icon_guide_hurburg@1x.png" alt="" class="coll-img" @click="()=> collapsed = !collapsed">
                </div>
                <a-menu id="app-menu" theme="dark" mode="inline" :defaultSelectedKeys="defaultKey">
                    <a-menu-item key="1" @click="go2('customer',1)">
                        <kfIcon></kfIcon>
                        <span>客服管理</span>
                    </a-menu-item>
                    <a-menu-item key="2" @click="go2('receivables',2)">
                        <skIcon></skIcon>
                        <span>收款账号</span>
                    </a-menu-item>
                    <a-menu-item key="3" @click="go2('common',3)">
                        <tyIcon></tyIcon>
                        <span>通用码</span>
                    </a-menu-item>
                    <a-menu-item key="4" @click="go2('success',4)">
                        <cgIcon></cgIcon>
                        <span>成功订单</span>
                    </a-menu-item>
                    <a-menu-item key="5" @click="go2('order',5)">
                        <qbIcon></qbIcon>
                        <span>全部订单</span>
                    </a-menu-item>
                    <a-menu-item key="6" class="signOut" @click="signOut">
                        <tcIcon></tcIcon>
                        <span>退出登录</span>
                    </a-menu-item>
                </a-menu>
            </a-layout-sider>
            <a-layout>
                <a-layout-header style="background: #fff; padding-right: 18px;height: 60px">
                    <a-dropdown>
                        <div class="fr wrap-top">
                            <img src="./assets/img/icon_guide_qrd_highlight@1x.png" alt="" class="top-img">
                            <span>1322222222</span>
                            <img src="./assets/img/icon_down@1x.png" alt="" class="arrow-down">
                        </div>
                        <a-menu slot="overlay">
                            <a-menu-item key="1" @click="go2('account')">修改资料</a-menu-item>
                        </a-menu>
                    </a-dropdown>
                    <a-dropdown>
                        <div class="fr wrap-top">
                            <span>余额：</span>
                            <span>12345</span>
                            <img src="./assets/img/icon_down@1x.png" alt="" class="arrow-down">
                        </div>
                        <a-menu slot="overlay">
                            <a-menu-item key="1" @click="go2('balance')">余额充值</a-menu-item>
                        </a-menu>
                    </a-dropdown>

                    <div class="fr wrap-top">
                        <router-link to="system">
                            <news class="system"></news>
                            <div class="point"></div>
                        </router-link>
                    </div>
                </a-layout-header>
                <a-layout-content style="flex:1;">
                    <router-view/>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </div>
</template>
<script>
    import kfIcon from './components/kf'
    import news from './components/newa'
    import skIcon from './components/sk'
    import tyIcon from './components/ty'
    import cgIcon from './components/cg'
    import qbIcon from './components/qb'
    import tcIcon from './components/tc'
    export default {
        name: 'app',
        data() {
            return {
                collapsed: false,
                defaultKey:[]
            }
        },
        beforeRouteEnter:function(to,from,next){
            console.log(to)
        },
        created:function(){

        },
        methods:{
            go2:function (page,key) {
                window.location.href="#/"+page;
            },
            signOut:function () {
                alert("退出登录")
            }
        },
        components: {
            kfIcon,skIcon,tyIcon,cgIcon,qbIcon,tcIcon,news
        },
        watch:{
            '$route.path':function (n) {
                this.defaultKey.length>0&&this.defaultKey.splice(0);
                let arr=['customer','receivables','common','success','order'];
                arr.forEach((val,index)=>{
                    if(window.location.hash.indexOf(val)!==-1){
                        this.defaultKey.push(''+(index+1));
                    }
                });
            }
        }
    }
</script>
<style>
    #app-menu .ant-menu-item{
        padding: 0 20px!important;
    }
</style>
<style lang="scss">
    .point{
        position: absolute;
        right: 0;
        top:17px;
        background: red;
        width: 4px;
        height: 4px;
        border-radius: 50%;
    }
    .arrow-down{
        width: 12px;
        height: 12px;
        margin-left: 6px;
        float: right;
        margin-top: 24px;
    }
    .wrap-top span{
        line-height: 60px;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #1E1E1E;
    }
    .wrap-top{
        margin-left: 37px;
        position: relative;
        cursor: pointer;
        overflow: hidden;
    }
    .system svg{
        width: 18px;
        height: 20px;
        float: left;
        margin-top: 20px;
        color: #999;
    }
    .system svg:hover{
        color: #128CE6;
    }
    .top-img{
        width: 34px;
        height: 34px;
        border-radius: 50%;
        float: left;
        margin-top: 13px;
        margin-right: 4px;
    }
    .icon1{
        background: url("./assets/img/icon_guide_kefu_normal@1x.png") no-repeat;
        background-size: 22px 22px;
        width: 22px;
        height: 22px;
        display: inline-block;
    }
    .collapside{
        height: 60px;
        background: #128CE6;
        margin-bottom: 40px;
    }
    .coll-img{
        width: 24px;
        height: 24px;
        float: left;
        margin-left: 18px;
        margin-top: 18px;
        cursor: pointer;
    }
    #app {
        height: 100%;
    }

    .home-layout{
        height: 100%;

    }
    .signOut{
        position: absolute!important;
        bottom:20px;
        left: 0;
    }
    .home-layout-side{
        overflow: hidden;
        position: relative;
    }
</style>
