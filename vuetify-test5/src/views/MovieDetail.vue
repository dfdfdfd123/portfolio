<template>
  <v-container>
     <v-row>
        <v-col cols="12">
          <h1 class="title-text">React로 만드는 미니 블로그</h1>
        </v-col>
      </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-img :src="imagePath2" alt="이미지" class="main-image" />
      </v-col>
    </v-row>
    <v-row>
       <h2>주요 기능</h2>
      <v-col cols="12">
         <ul>
            <li>head 영역에 로그인, 회원가입 버튼을 놓습니다.</li>
            <li>axios와 db.json을 이용해서 로그인을 합니다.</li>
            <li>게시글을 클릭하면, 해당 게시글로 이동합니다.</li>
          </ul>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-img :src="imagePath3" alt="이미지" class="main-image" />
         <v-img :src="imagePath4" alt="이미지" class="main-image" />
      </v-col>
    </v-row>
    <v-row>
       <h2>로그인 기능</h2>
      <v-col cols="12">
         <ul>
           <li>db.json에 저장 된 관리자 아이디와 비밀번호를 입력 후, 로그인을 하면 관리자 계정으로 로그인 됩니다.</li>
           <li>db.json에 저장 된 아이디나 비밀번호가 아니면 로그인이 되지 않습니다.</li>
          </ul>
      </v-col>
    </v-row>
     <v-row align="center" justify="center">
      <v-col cols="12">
         <v-img :src="imagePath4" alt="이미지" class="main-image" />
      </v-col>
    </v-row>
    <v-row>
       <h2>게시글 상세보기</h2>
      <v-col cols="12">
         <ul>
           <li>해당 게시글을 클릭하면, 이렇게 상세 게시글 내용과 댓글들이 나옵니다.</li>
          </ul>
      </v-col>
    </v-row>
    <v-row>
        <v-col cols="12">
          <h1 class="title-text">음악&영화 추천 웹사이트</h1>
        </v-col>
      </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-img :src="imagePath" alt="이미지" class="main-image" />
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <p>음악과 영화를 추천해주는 웹사이트를 계획하고 있습니다.</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      imagePath: '/images/react.png',
      imagePath2: '/images/reactblog1.png',
      imagePath3: '/images/reactblog2.png',
      imagePath4: '/images/reactblog3.png',
      imagePath4: '/images/reactblog5.png',
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
