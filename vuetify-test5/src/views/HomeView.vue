<template>
  <div>
    <h1 class="title-text">Dashboard</h1>

    <v-main>
      <v-container>
        <!-- 정렬 -->
        <v-row class="mb-3 ml-2">
            <v-btn small plain @click="$event => sortBy('title')">
              <span>by project title</span>
            </v-btn>
            <v-btn small plain @click="$event => sortBy('person')">
              <span>by person</span>
            </v-btn>
        </v-row>

        <!-- 프로젝트 내용 -->
        <v-card v-for="project in projects" :key="project.title" flat class="gray lighten-4">
          <v-row no-gutters wrap :class="`pa-3 project ${project.state}`">
             <!-- title -->
          <v-col cols="12" md="6">
            <div class="caption gray--text">Project Title</div>
            <div @click="handleProjectClick(project)">{{ project.title }}</div>
          </v-col>
          <!-- person -->
          <v-col cols="4" sm="4" md="2">
            <div class="caption gray--text">Project Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <!-- Due -->
          <v-col cols="8" sm="5" md="2">
            <div class="caption gray--text">Project Due</div>
            <div>{{ project.due }}</div>
          </v-col>
          <!-- state -->
          <v-col cols="4" sm="3" md="2" class="pl-4">
            <div class="caption gray--text">Project State</div>
            <div :class="`${project.state} state`">{{ project.state }}</div>
          </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-main>
    </div>
</template>

<script>
  

  export default {

    data() {
      return {
        projects : [
          {title: '온라인 쇼핑몰 웹사이트', person : '임정민', due: '5월 ~ 학기 말', state: 'ongoing'},
          {title: '음악,영화 추천 웹사이트&미니 블로그', person : '임정민', due: '5월 ~ 학기 말', state: 'ongoing'},
          {title: '가위바위보 게임', person : '임정민', due: '2019', state: 'complete'},
          



        ]
      }
    },
    methods: {
      sortBy(prop){
        this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
      },
      handleProjectClick(project) {
      if (project.title === '가위바위보 게임') {
        this.$router.push('/rpsdetail');
      }
      else if (project.title === '온라인 쇼핑몰 웹사이트') {
        this.$router.push('/shoppingdetail');
      }
      else if (project.title === '음악,영화 추천 웹사이트&미니 블로그')
      {
        this.$router.push('/moviedetail');
      }

    }
      

       
    }
    
    
   
  }
</script>

<style scoped>
  .project.complete {
    border-left: 4px solid skyblue;
  }
  .project.ongoing {
    border-left: 4px solid orange;
  }

  .state.complete {
    color : skyblue;
  }
  .state.ongoing {
    color: orange;
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

</style>
