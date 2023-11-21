<template>
  <div>
    <div class="profile-content">
      <div class="img-container">
        <img src="/images/face.jpg" alt="" style="width: 150px;">
      </div>
      <h1><span style="font-weight: bold">임정민</span>입니다.</h1>
    </div>

    <v-container>
    <v-row>
     <v-col cols="12" sm="4">
          <v-card class="card-content">
            <v-card-title>
              <h3>Profile</h3>
            </v-card-title>
            <v-card-text>
              <p class="birth">birth : 1999-12-02</p>
              <p class="email">email : winwin4668@naver.com</p>
              <p class="language">language : react, vue.js, html, css</p>
              <p class="git">git :<a href="https://github.com/dfdfdfd123">https://github.com/dfdfdfd123</a></p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

</script>

<style scoped>

.profile-content{
  position: absolute;
  top: 28%;
  left: 23%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 260px;
  margin-top: 5%;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 10px 10px 15px gray;
  }
.img-container{
    height: 173px;
    width: 150px;
    margin:10% auto;
    display:block;
    overflow: hidden;
    text-align: center;
    animation-delay: 0.4s;
    border: 1px solid gray;
   }
.card-content{
  position: absolute;
  top: 20%;
  left: 40%;
  width: 600px;
}
.card-title{
  font-size: 15px;
}
h1{
    display: inline-block;
    font-weight: normal;
     font-size: 25px;
  }

</style>