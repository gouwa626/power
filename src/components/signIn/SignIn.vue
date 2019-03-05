<template>
    <section>
         <header>
             <div class="icon_dianwang">
                 <img src="../../assets/logo.jpg" width="230">
             </div>
         </header>
         <div class="sign-section">
             <div class="sign-title">
                 停电单查询支持系统
             </div>
             <div class="sign-content">
                 <div>
                     <span>用户名：</span>
                     <input type="text" v-model.trim="signin.userinfo">
                 </div>
                  <div>
                     <span>密码：</span>
                     <input type="password" v-model.trim="signin.password">
                 </div>
                 <div class="btn-sign">
                     <el-button @click="submitclick">登录</el-button>
                     <el-button @click="cancelclick">取消</el-button>
                 </div>
             </div>
         </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      "signin": {
        "userinfo": '',
        "password": ''
      }
    }
  },
  methods: {
    submitclick() {
      console.log(this.signin);
    },
    cancelclick() {
      let newSign = {
        "userinfo": '',
        "password": ''
      }
      this.signin = {...this.signin, ...newSign};
    }
  }
}
</script>

<style lang="stylus" scoped>
    section{
        background-color:#fff;
        width:100%;
        height:100%;
        margin:0 auto;
        align-items:center;

         .icon_dianwang{
            width:100%;
            padding-bottom :20px;
            border-bottom: 2px solid #2E8B57;
        }

        .sign-section{
            margin:0 auto;

            .sign-title{
                font-size:40px;
                text-align:center;
                padding:40px 0 ;
            }

            .sign-content{
                width:350px;
                background-color:#9d9d9d;
                box-shadow: 10px 10px 5px #888888;
                border-radius:5px;
                padding:20px;
                font-size:16px;
                margin:0 auto;
                margin-top:20px;
                color:#fff;

                >div{
                    margin:20px;

                    span{
                        display:inline-block;
                        width:80px;
                        text-align:right;
                    }

                    input{
                        border-radius:3px;
                        height:20px;
                        padding:5px 10px;
                    }

                    >>> .el-button{
                        margin:25px;
                    }

                }
                .btn-sign{
                    margin:0 50px;
                }
            }
        }

    }
</style>
