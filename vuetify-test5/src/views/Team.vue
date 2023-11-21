<template>
  <div class="team">
    <h1 class="title-text">Team</h1>

    <v-container>
      <v-row>
          <v-col v-for="person in team" :key="person.name" cols="12" sm="4" md="3">
            <v-card class="text-center ma-3">
              <v-responsive class="pt-6 md-10">
                <v-avatar size="100">
                  <img :src="person.avatar">
                </v-avatar>
              </v-responsive>
              <v-card-text>
                  <div>{{ person.name }}</div>
                  <div>{{ person.role }}</div>
              </v-card-text>
            </v-card>
          </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>


export default {
  data() {
      return{
        team : [
          {name:'임정민', role:'Team leader', avatar: 'images/face.jpg'},
          
      ]
      }
  }
}
</script>

<style scoped>
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
