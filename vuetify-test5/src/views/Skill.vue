<template>
  <v-container class="skills-area" id="skill">
    <v-row class="title title-skill">
      <v-col cols="12">
        <h1 class="title-text">SKILL</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(skill, index) in skills" :key="index" cols="12">
        <v-card class="item">
          <v-row>
          <v-col cols="2">
            <v-icon class="icon">{{ skill.icon }}</v-icon>
          </v-col>
          <v-col cols="10">
            <div class="skill">{{ skill.title }}</div>
            <div class="content">{{ skill.content }}</div>
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
      skills: [
       
        {
          icon: "mdi-language-html5",
          title: "HTML & CSS",
          content: `
          HTML & CSS는 웹 프론트 개발에 있어서 필수 이자 기본이 되는 언어입니다.  HTML이 텍스트나 이미지, 표와 같은 구성 요소를 웹 문서에 넣어 뼈대를 만드는 것이라면 
          CSS는 색상이나 크기, 이미지 크기나 위치, 배치 방법 등 웹 문서의 디자인 요소를 담당 합니다.
          `
        },
        {
          icon: "mdi-language-javascript",
          title: "JAVASCRIPT",
          content: `
          JAVASCRIPT는 객체 기반의 스크립트 프로그래밍 언어입니다.
           자바스크립트 공부를 바탕으로 ES6에 대해 이해하고있으며 
           2중 for문을 활용한 좌석 배열 선택하기, 
           현재 날짜부터 마지막 날짜의 리스트 구하기 등에 활용하고있으며 
           axios및 ajax를 활용한 REST API 방식의 비동기 통신을 활용하고있습니다.
          `
        },
        {
          icon: "mdi-language-java",
          title: "JAVA",
          content: `
          JAVA는 객체 지향 프로그래밍 언어입니다. 상속, 추상화, 캡슐화등을 적용한 자바에 대해 이해하고 있습니다.          
          `
        },
        {
          icon: "mdi-database",
          title: "ORACLE & MYSQL",
          content: `
          ORACLE 및 MySQL 기본 쿼리문에 대해 숙지하고있으며 테이블간 관계 설정에 대해 숙지하고있습니다
          또한 jdbc를 활용하여 spring및 spring boot와 연동이 가능합니다.
          
          `
        },
        {
          icon: "mdi-vuejs",
          title: "Vue",
          content: `
           Vue.js에 대해 이해하고 있으며 
           프로젝트의 프론트를 vue-cli 기반으로 제작하여 Vue Router, Vuetify를 활용하여 프로젝트를 제작하였습니다.
          `
        },
        {
          icon: "mdi-server",
          title: "Spring & Spring-boot",
          content: `
          MVC 방식의 스프링에 대해 이해하고있으며 Spring을 활용해 간단한 웹사이트를 구현하였으며
          @RestController을 활용한 REST API 방식의 스프링 부트 프로젝트 제작이 가능합니다.
          
          `
        },
        {
          icon: "mdi-language-csharp",
          title: "C#",
          content: `
          학교에서 C#을 배우고 공부한 적이 있으며, C#으로 간단한 프로그램을 만들어 보았습니다.
          `
        },
         {
          icon: "mdi-react",
          title: "React",
          content: `
           React에 대해 이해하고 있으며, 프로젝트를 Router, axios를 활용하여 제작이 가능합니다.
          
          `
        },
        {
          icon: "mdi-source-branch",
          title: "GIT & GITHUB",
          content: `
          git 에 대한 기본적인 이해를 하고있으며 git을 통해 코드를 관리하고 git을 통해 github에 작성한 코드들을 저장및 관리하고 있습니다.
           
          `
        }
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

.title-skill {
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

.skills-area {
  margin-top: 30px;
}

.skills-area .container {
  text-align: center;
}

.skills-area .item {
  height: auto;
  background-color: #fff;
  padding: 20px;
  margin: 20px;
  text-align: left;
  transition: all 0.5s ease;
  box-shadow: rgba(188, 196, 219, 0.77) 5px 5px 13px 0px;
}

.skills-area .item :hover {
  transform: scale(1.015);
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.2);
}

.skills-area .item .icon {
  padding: 10px 0;
  display: inline-block;
}

.skills-area .item .icon .mdi-icon {
  font-size: 48px;
  color: #aaa;
}

.skills-area .item .skill {
  font-size: 32px;
  font-weight: bold;
  padding: 10px 0;
}

.skills-area .item .content {
  font-size: 16px;
  font-family: "Noto Sans KR", sans-serif;
  letter-spacing: 1.5px;
  padding: 10px 0;
}

.icon-image {
  width: 80px;
}
</style>
