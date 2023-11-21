<template>
  <v-container class="graduations-area" id="skill">
    <v-row class="title title-graduation">
      <v-col cols="12">
        <h1 class="title-text">Graduation</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(graduation, index) in graduations" :key="index" cols="12">
        <v-card class="item">
          <v-row>
          <v-col cols="2">
            <v-icon class="icon">{{ graduation.icon }}</v-icon>
          </v-col>
          <v-col cols="10">
            <div class="skill">{{ graduation.title }}</div>
            <div class="content">{{ graduation.content }}</div>
          </v-col>
        </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      graduations: [
       
        {
          icon: "mdi-school",
          title: "개원초등학교",
          content: `
         개원초등학교에서는 기초적인 학문과 함께 친구들과의 소통과 협동을 배우며 건강한 교육환경에서 자라기 시작했습니다.
          `
        },
        {
          icon: "mdi-school",
          title: "신곡중학교",
          content: `
          신곡중학교에서는 다양한 학과와 교양 과목을 통해 자신의 관심 분야를 발견하고, 적극적인 참여로 더욱 성장할 수 있는 기회를 가졌습니다.
          `
        },
        {
          icon: "mdi-school",
          title: "부흥고등학교",
          content: `
         신곡중학교에서는 다양한 학과와 교양 과목을 통해 자신의 관심 분야를 발견하고, 적극적인 참여로 더욱 성장할 수 있는 기회를 가졌습니다.
          `
        },
      
      ]
    };
  }
};
</script>

<style scoped>
.title-text {
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 3px;
  padding-bottom: 70px;
}

.title-graduation {
  margin-top: 30px;
}

.title-text::after {
  content: "";
  display: block;
  width: 100px;
  height: 10px;
  margin: 0 auto;
  background: -webkit-linear-gradient(#4169e1, #5592cf);
}

.graduations-area {
  margin-top: 30px;
}

.graduations-area .container {
  text-align: center;
}

.graduations-area .item {
  height: auto;
  background-color: #fff;
  padding: 20px;
  margin: 20px;
  text-align: left;
  transition: all 0.5s ease;
  box-shadow: rgba(188, 196, 219, 0.77) 5px 5px 13px 0px;
}

.graduations-area .item:hover {
  transform: scale(1.015);
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.2);
}

.graduations-area .item .icon {
  padding: 10px 0;
  display: inline-block;
}

.skills-area .item .icon .mdi-icon {
  font-size: 48px;
  color: #aaa;
}

.graduations-area .item .skill {
  font-size: 32px;
  font-weight: bold;
  padding: 10px 0;
}

.graduations-area .item .content {
  font-size: 16px;
  font-family: "Noto Sans KR", sans-serif;
  letter-spacing: 1.5px;
  padding: 10px 0;
}

.icon-image {
  width: 80px;
}
</style>

