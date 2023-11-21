<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1 class="title-text">MyProject</h1>
        </v-col>
      </v-row>

      <v-card outlined class="project-card1" @click="handleProjectClick('/rpsdetail')">
        <v-card-title class="project-title">
          <h2>가위바위보 프로그램</h2>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="6">
              <v-img :src="imagePath" alt="이미지" class="main-image1" contain />
            </v-col>
            <v-col cols="12" sm="6">
              <p class="pro-text">
                가위바위보 프로그램은 사용자가 가위, 바위 또는 보 중에서 하나를 선택하면
                컴퓨터도 무작위로 가위, 바위 또는 보 중에서 하나를 선택하여 승패를 결정하는 게임입니다.
              </p>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <v-divider class="divider"></v-divider>

      <v-card outlined class="project-card" @click="handleProjectClick('/shoppingdetail')">
        <v-card-title class="project-title">
          <h2>온라인 쇼핑몰 웹사이트 (진행중)</h2>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="6">
              <v-img :src="imagePath2" alt="이미지" class="main-image" />
            </v-col>
            <v-col cols="12" sm="6">
              <p class="pro-text">Vue.js로 구현한 온라인 쇼핑을 하는 웹사이트입니다.</p>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <v-divider class="divider" ></v-divider>

      <v-card outlined class="project-card3" @click="handleProjectClick('/moviedetail')">
        <v-card-title class="project-title">
          <h2>영화, 음악 추천 웹사이트 & 미니 블로그 (진행중)</h2>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="6"  sm="6">
              <v-img :src="imagePath3" alt="이미지" class="main-image3" contain />
            </v-col>
            <v-col cols="6" sm="6">
              <v-img :src="imagePath4" alt="이미지" class="main-image3" />
            </v-col>
            <v-col cols="6" sm="6">
              <v-img :src="imagePath6" alt="이미지" class="main-image3" />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <p class="pro-text">React로 만드는 음악과 영화를 추천해주는 웹사이트와 미니 블로그를 구현 중에 있습니다.</p>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imagePath: '/images/image2.png',
      imagePath2: '/images/mainscreen1.png',
      imagePath3: '/images/react.png',
      imagePath4: '/images/reactblog1.png',
      imagePath6: '/images/reactblog3.png',
    };
     
  },
  methods: {
    handleProjectClick(route) {
      this.$router.push(route);
    },
  },
   
};
</script>

<style scoped>
.main-image {
  width: 100%;
  height: auto;
  max-height: 800px; /* 수정 */
  object-fit: contain;
}

.main-image1 {
  width: 100%;
  height: auto;
  max-height: 800px; /* 수정 */
  object-fit: contain;
}

.main-image3 {
  width: 100%;
  height: auto; /* 변경 */
  max-height: 100%; /* 변경 */
  object-fit: contain;
}

.title-text {
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 3px;
  padding-bottom: 70px;
}

.title-text::after {
  content: "";
  display: block;
  width: 100px;
  height: 10px;
  margin: 0 auto;
  background: -webkit-linear-gradient(#4169e1, #5592cf);
}

.project-card {
  margin-bottom: 20px;
  height:400px;
  
}

.project-card:hover
{
  transform: scale(1.015);
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.2);
}

.project-card1 {
  margin-bottom: 20px;
  
}

.project-card1:hover
{
  transform: scale(1.015);
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.2);
}

.project-card3 {
  margin-bottom: 20px;
  height: 700px;
}

.project-card3:hover
{
  transform: scale(1.015);
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.2);
}

.project-title {
  font-size: 24px;
  font-weight: bold;
  padding: 16px;
}

.divider {
  margin: 20px 0;
}

.pro-text {
  font-size: 22px;
  font-family: "Noto Sans KR", sans-serif;
  letter-spacing: 1.5px;
  padding: 10px 0;
  white-space: pre-wrap; /* 줄바꿈 설정 */
}
</style>
