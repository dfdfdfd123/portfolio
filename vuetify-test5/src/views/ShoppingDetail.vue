<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1 class="title-text">온라인 쇼핑몰</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-img :src="imagePath" alt="이미지" class="main-image" />
        </v-col>
        <v-col cols="12" md="4">
          <v-img :src="imagePath2" alt="이미지" class="main-image" />
        </v-col>
        <v-col cols="12" md="4">
          <v-img :src="imagePath3" alt="이미지" class="main-image" />
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
            <li>메인 페이지에는 각 종류별로 추천물품 3개씩 보여주고, 사진을 클릭하면 물품에 대한 상세페이지로 이동합니다. 추천 물품 이외의 물건은 상품검색을 통해 보여줍니다.</li>
            <li>shopping 왼쪽의 줄3개를 누르면, 카테고리와 프로필이 출력됩니다.</li>
            <li>로그인, 회원가입, 고객센터를 navbar에 두고, 버튼을 누르면 해당 router로 이동합니다.</li>
          </ul>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-img :src="imagePath4" alt="이미지" class="main-image" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <ul>
            <li>위와 같이, 카테고리에는 각 종류별로 볼 수 있는 물품란들이 있습니다.</li>
          </ul>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-img :src="imagePath5" alt="이미지" class="main-image" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <ul>
            <li>로그인을 클릭해서 로그인 페이지로 이동한 화면입니다. 로그인 페이지에 접속하면, mounted를 활용해, navbar에 있는 로그인 버튼을 지워줍니다.</li>
            <li>아이디 찾기와, 비밀번호 찾기 버튼을 누르면 해당 router로 이동합니다.</li> 
          </ul>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-img :src="imagePath6" alt="이미지" class="main-image" />
        </v-col>
        <v-col cols="12">
          <v-img :src="imagePath7" alt="이미지" class="main-image" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <ul>
            <li>- 모두 동의합니다를 체크하면, 모두 체크가 되고, 항목들을 모두 입력 후, 체크까지 끝내고 회원가입 버튼을 누르면 회원가입이 끝납니다.</li>
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
      imagePath: '/images/mainscreen1.png', // 이미지 파일 경로 설정
      imagePath2: '/images/mainscreen2.jpg', // 이미지 파일 경로 설정
      imagePath3: '/images/mainscreen3.png', // 이미지 파일 경로 설정
      imagePath4: '/images/mainscreen4.png',
      imagePath5: '/images/login.png',
      imagePath6: '/images/signup1.png',
      imagePath7: '/images/signup2.png'
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
