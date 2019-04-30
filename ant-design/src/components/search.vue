<template>
    <div class="search">
        <div class="search-coll-btn" >
            <span class="pointer" @click="coll">{{show?"收起搜索条件":"展开搜索条件"}} <a-icon type="caret-up" class="icon" :class="{'r180':show}"/></span>
        </div>
        <div ref="content" class="search-content">
            <div class="search-content2">
                <slot name="search"></slot>
            </div>
        </div>
        <div class="wrap-table">
            <slot name="table"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "search",
        data:function(){
            return{
                show:true,
                height:0
            }
        },
        methods:{
            coll:function () {
                this.show=!this.show;
            }
        },
        mounted:function(){
            this.height=this.$refs.content.clientHeight;
            this.$refs.content.style.height=this.height+"px";
        },
        watch:{
            "show":function (n) {
                if(n){
                    this.$refs.content.style.height=this.height+"px"
                }else{
                    this.$refs.content.style.height=0;
                }
            }
        }
    }
</script>

<style scoped>
    .wrap-table{
        background: #fff;
    }
    .r180{
        transform: rotate(180deg);
    }
    .icon{
        transition: all 0.3s;
    }
    .search-coll-btn{
        text-align: right;
        font-size: 14px;
        color: #128CE6;
        line-height: 18px;
        margin-bottom: 20px;
    }
    .search-content2{
        background: #FFFFFF;
        border-radius: 4px;
        padding: 30px 20px;
    }
    .search-content{
        transition: all 0.3s;
        overflow: hidden;
        margin-bottom: 20px;
    }
    .h0{
        height: 0;
    }
</style>
