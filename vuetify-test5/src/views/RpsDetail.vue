<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1 class="title-text">가위바위보 프로그램</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-img :src="imagePath" alt="이미지" class="main-image" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <p>가위바위보 프로그램은 사용자가 가위, 바위 또는 보 중에서 하나를 선택하면 
          컴퓨터도 무작위로 가위, 바위 또는 보 중에서 하나를 선택하여 승패를 결정하는 게임입니다.</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h2>주요 기능</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <ul>
            <li>사용자가 가위, 바위, 보 중에서 선택할 수 있습니다.</li>
            <li>컴퓨터는 무작위로 가위, 바위, 보 중에서 선택합니다.</li>
            <li>사용자와 컴퓨터의 선택에 따라 승패를 판정합니다.</li>
            <li>게임의 승패 결과를 화면에 표시합니다.</li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imagePath: '/images/rimage3.png', // 이미지 파일 경로 설정
    };
  },
};
</script>

<style scoped>
.main-image {
  width: 100%;
  max-height: 500px;
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
 
}

</style>
