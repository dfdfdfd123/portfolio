<template>
  <v-container>
    <h1 class="title-text">Education</h1>
    <v-card class="education">
      <v-card-title>
        <h2>대학</h2>
      </v-card-title>

      <v-card-text>
        <v-row>
          <v-col v-for="item in educationList" :key="item.id" cols="12">
            <v-card class="education-item">
              <v-card-text>
                <p class="school">{{ item.school }}</p>
                <p class="duration">{{ item.duration }}</p>
                <p class="description">{{ item.description }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card class="certifications">
      <v-card-title>
        <h2>자격증</h2>
      </v-card-title>

      <v-card-text>
        <v-row>
          <v-col v-for="item in certificationList" :key="item.id" cols="12">
            <v-card class="certification">
              <v-card-text>
                <v-row align="center">
                  <v-col cols="3">
                    <v-dialog v-model="item.showModal" max-width="500px">
                      <template v-slot:activator="{ on }">
                        <v-img :src="item.image" alt="자격증 이미지" v-on="on" class="certification-image"></v-img>
                      </template>
                      <v-card>
                        <v-card-text>
                          <v-img :src="item.image" alt="자격증 이미지" class="modal-image"></v-img>
                        </v-card-text>
                      </v-card>
                    </v-dialog>
                  </v-col>
                  <v-col cols="9">
                    <p class="name">{{ item.name }}</p>
                    <p class="certifying">{{ item.certifying }}</p>
                    <p class="issuance">{{ item.issuance }}</p>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      educationList: [
        {
          id: 1,
          school: "신라대학교",
          duration: "2018 ~ 2023",
          description:
            "웹 개발과 소프트웨어 공학에 중점을 두고 컴퓨터소프트웨어공학을 공부했습니다. HTML, CSS, JavaScript, Vue, React 등과 같은 다양한 언어를 공부하였습니다.",
        },
      ],

      certificationList: [
        {
          name: "정보처리기사 필기",
          certifying: "큐넷",
          issuance: "2023-06-14",
          image: "/images/information.png",
          showModal: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
.education {
  margin-bottom: 20px;
}

.education-item {
  margin-bottom: 15px;
  border-radius: 4px;
  padding: 10px;
  background-color: #f5f5f5;
}

.certification {
  margin-bottom: 15px;
  border-radius: 4px;
  padding: 10px;
  background-color: #f5f5f5;
}

.school {
  font-weight: bold;
}



.duration {
  color: #888;
}

.description {
  margin-top: 5px;
}

.name {
  font-weight: bold;
}

.certifying {
  color: #888;
}

.issuance {
  color: #888;
}

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

.image-container {
  width: 100%;
  height: 0;
  padding-bottom: 100%; /* 이미지 비율에 맞춰 조정 */
  position: relative;
}

.image-container v-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.certification-image:hover {
  transform: scale(1.015);
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.2);
}

</style>

