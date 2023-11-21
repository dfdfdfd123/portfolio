<template>
  <div>

    <br>
    <v-btn @click="toggleUserGroup('1학년 1학기')">1학년 1학기</v-btn>
    <v-btn @click="toggleUserGroup('1학년 2학기')">1학년 2학기</v-btn>
    <v-btn @click="toggleUserGroup('2학년 1학기')">2학년 1학기</v-btn>
    <v-btn @click="toggleUserGroup('2학년 2학기')">2학년 2학기</v-btn>
    <v-btn @click="toggleUserGroup('3학년 1학기')">3학년 1학기</v-btn>
    <v-btn @click="toggleUserGroup('3학년 2학기')">3학년 2학기</v-btn>
    
    <template>
    <v-data-table 
      v-for="(group, index) in userGroups"
      :key="index"
      :headers="headers"
      :items="group.users"
      :search="group.search"
      :loading="group.loading"
      :rows-per-page-items="[10, 20, 50]"
      :page.sync="group.page"
      :items-per-page="group.perPage"
      @update:page="updatePage(index, $event)"
      @update:items-per-page="updatePerPage(index, $event)"
      
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>{{ group.name }}</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="group.search"
            append-icon="mdi-magnify"
            label="검색"
            single-line
            hide-details
          ></v-text-field>
        </v-toolbar>
      </template>

      <template v-slot:footer>
        <v-row>
          <v-col cols="4">
            <strong>신청:</strong> {{ calculateApplicredit(group.users) }}
          </v-col>
          <v-col cols="4">
            <strong>취득:</strong> {{ calculateAcquisition(group.users) }}
          </v-col>
          <v-col cols="4">
            <strong>평점평균:</strong> {{ calculateAverageGrade(group.users) }}
          </v-col>
          <v-col cols="4">
            <strong>백분위:</strong> {{ calculatePercentile(group.users) }}%
          </v-col>
        </v-row>
      </template>
      
    </v-data-table>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
       
      headers: [
        { text: '구분', value: 'division' },
        { text: '과목번호', value: 'number' },
        { text: '과목명', value: 'name' },
        { text: '학점', value: 'credit' },
        { text: '성적', value: 'grade' },
        { text: '등급', value: 'rank' },
      ],
      
       originalUserGroups: [],
      userGroups: [
        {
          name: '1학년 1학기 성적',
          users: [
            { division: '교필', number: 10292, name: 'SEPI(대학영어 I)', credit: 3, grade: 85, rank: 'B+' },
            { division: '교필', number: 10306, name: '공학적 글쓰기', credit: 2, grade: 85, rank: 'B+' },
            { division: '교선', number: 21341, name: '지구촌 여행과 매너', credit: 2, grade: 80, rank: 'B' },
            { division: '교선', number: 21355, name: '글로벌직업탐구', credit: 2, grade: 93, rank: 'A' },
            { division: '전필', number: 44739, name: '진로지도 I', credit: 0.5, grade: 97, rank: 'P' },
            { division: '전필', number: 44958, name: '컴퓨터공학개론', credit: 3, grade: 88, rank: 'B+' },
            { division: '전필', number: 44969, name: 'S/W프로그래밍사고', credit: 3, grade: 77, rank: 'C+' },
            { division: '전선', number: '5F727', name: '웹제작', credit: 3, grade: 80, rank: 'B' },
          ],
           
        },
        {
          name: '1학년 2학기 성적',
          users: [
            { division: '교필', number: 10293, name: 'SEPII(대학영어II)', credit: 3, grade: 83, rank: 'B' },
            { division: '교필', number: 10307, name: '사회트렌드 세미나', credit: 2, grade: 87, rank: 'B+' },
            { division: '교선', number: 20663, name: '역사속의 여성', credit: 2, grade: 95, rank: 'A+' },
            { division: '교선', number: 44743, name: '진로지도 II', credit: 0.5, grade: 97, rank: 'P' },
            { division: '전필', number: 44963, name: '전기전자공학개론', credit: 3, grade: 76, rank: 'C+' },
            { division: '전필', number: 44967, name: '물리학', credit: 3, grade: 87, rank: 'B+' },
            { division: '전필', number: 44981, name: 'C프로그래밍', credit: 3, grade: 73, rank: 'C' },
            { division: '전선', number: '5F707', name: '논리회로설계', credit: 2, grade: 86, rank: 'B+' },
          ],
        },

        {
          name: '2학년 1학기 성적',
          users: [
            { division: '교필', number: 10308, name: '화랑인문강좌', credit: 2, grade: 81, rank: 'B' },
            { division: '교선', number: 21316, name: '인간성장과 발달', credit: 2, grade: 95, rank: 'A+' },
            { division: '전필', number: 44740, name: '진로지도 III', credit: 0.5, grade: 97, rank: 'P' },
            { division: '전필', number: 44968, name: '공업수학', credit: 3, grade: 80, rank: 'B' },
            { division: '전선', number: 56486, name: '컴퓨터구조', credit: 3, grade: 76, rank: 'C+' },
            { division: '전선', number: '5A255', name: '시스템운영', credit: 3, grade: 88, rank: 'B+' },
            { division: '전선', number: '5D576', name: 'JAVA프로그래밍 I', credit: 3, grade: 81, rank: 'B' },
            { division: '전선', number: '5F707', name: 'C#프로그래밍', credit: 3, grade: 78, rank: 'C+' },
          ],
        },
        {
          name: '2학년 2학기 성적',
          users: [
            { division: '교필', number: 10309, name: '(공학계열)비판·창의적 사고', credit: 2, grade: 85, rank: 'B+' },
            { division: '교선', number: 20738, name: '그리스신화', credit: 2, grade: 99, rank: 'A+' },
            { division: '교선', number: 21357, name: '토익', credit: 2, grade: 90, rank: 'A' },
            { division: '전필', number: 44784, name: '진로지도 IV', credit: 0.5, grade: 93, rank: 'P' },
            { division: '전필', number: 44982, name: '문제해결과 알고리즘', credit: 3, grade: 83, rank: 'B' },
            { division: '전선', number: 56490, name: '운영체제', credit: 3, grade: 87, rank: 'B+' },
            { division: '전선', number: '5D577', name: 'JAVA프로그래밍 II', credit: 3, grade: 94, rank: 'A' },
          ],
        },
         {
          name: '3학년 1학기 성적',
          users: [
            { division: '교선', number: 21358, name: '기술트렌드 세미나', credit: 3, grade: 95, rank: 'A+' },
            { division: '전필', number: 44342, name: '데이터베이스', credit: 3, grade: 97, rank: 'A+' },
            { division: '전필', number: 44741, name: '진로지도 V', credit: 0.5, grade: 98, rank: 'P' },
            { division: '전필', number: 44983, name: '임베디드시스템', credit: 3, grade: 93, rank: 'A' },
            { division: '전필', number: 45055, name: '웹프로그래밍', credit: 3, grade: 91, rank: 'A' },
            { division: '전선', number: '5F709', name: '네트워크', credit: 3, grade: 96, rank: 'A+' },
            { division: '전선', number: '5F710', name: '모바일프로그래밍', credit: 3, grade: 94, rank: 'A' },
          ], 
        },
         {
          name: '3학년 2학기 성적',
          users: [
            { division: '교선', number: 20901, name: '이미지리더십', credit: 2, grade: 90, rank: 'A' },
            { division: '교선', number: 21361, name: '테크노 인간학', credit: 3, grade: 96, rank: 'A+' },
            { division: '전필', number: 44425, name: '소프트웨어공학', credit: 3, grade: 85, rank: 'B+' },
            { division: '전필', number: 44745, name: '진로지도 VI', credit: 0.5, grade: 97, rank: 'P' },
            { division: '전필', number: 44980, name: 'MICT융합과목', credit: 3, grade: 86, rank: 'B+' },
            { division: '전필', number: 45056, name: '임베디드프로그래밍', credit: 3, grade: 92, rank: 'A' },
            { division: '전필', number: 45057, name: 'IoT플랫폼실습', credit: 3, grade: 89, rank: 'B+' },
          ],     
           
        }, 
        
      ],
      
    };
  },
  methods: {

toggleUserGroup(btn) {
  // 사용자 그룹을 토글하는 메서드입니다.
  // 각 버튼은 학년과 학기에 대응되는 그룹을 표시합니다.

  if (btn === '1학년 1학기') {
    
    // originalUserGroups 배열에서 '1학년 1학기 성적'에 해당하는 그룹을 찾습니다.
    const [firstGroup] = this.originalUserGroups.filter(group => group.name === '1학년 1학기 성적');

    // firstGroup을 복사하여 새로운 배열에 할당합니다.
    this.userGroups = [JSON.parse(JSON.stringify(firstGroup))];
  } 
  if (btn === '1학년 1학기') {
    
    const [firstGroup] = this.originalUserGroups.filter(group => group.name === '1학년 1학기 성적');
    this.userGroups = [JSON.parse(JSON.stringify(firstGroup))];
  } 
  else if (btn === '1학년 2학기') 
  {
    
    const [secondGroup] = this.originalUserGroups.filter(group => group.name === '1학년 2학기 성적');
    this.userGroups = [JSON.parse(JSON.stringify(secondGroup))];
  } 
  else if (btn === '2학년 1학기') {
   
    const [thirdGroup] = this.originalUserGroups.filter(group => group.name === '2학년 1학기 성적');
    this.userGroups = [JSON.parse(JSON.stringify(thirdGroup))];
  } 
  else if (btn === '2학년 2학기')
  {
    const [fourthGroup] = this.originalUserGroups.filter(group => group.name === '2학년 2학기 성적');
    this.userGroups = [JSON.parse(JSON.stringify(fourthGroup))];
  }
   else if (btn === '3학년 1학기')
  {
    const [fifthGroup] = this.originalUserGroups.filter(group => group.name === '3학년 1학기 성적');
    this.userGroups = [JSON.parse(JSON.stringify(fifthGroup))];
  }
   else if (btn === '3학년 2학기')
  {
    const [sixthGroup] = this.originalUserGroups.filter(group => group.name === '3학년 2학기 성적');
    this.userGroups = [JSON.parse(JSON.stringify(sixthGroup))];
  }
},
    updatePage(groupIndex, page) {
      this.userGroups[groupIndex].page = page;
    },
    updatePerPage(groupIndex, perPage) {
      this.userGroups[groupIndex].perPage = perPage;
    },

    calculateApplicredit(users) {
       // 취득학점을 계산하는 메서드입니다.
    // users 배열을 순회하며 학점이 'F'가 아닌 사용자의 이수학점을 더하여 반환합니다.
      return users.reduce((total, user) => {
        return total + user.credit;
      }, 0);
    },
    calculateAcquisition(users) {

       // 평균 학점을 계산하는 메서드입니다.
    // rankValues 객체를 사용하여 학점에 해당하는 가중치를 부여하고, 사용자의 학점과 이수학점을 곱하여 총 학점과 총 이수학점을 계산합니다.
    // 계산 결과로 평균 학점을 반환합니다.

      return users.reduce((total, user) => {
        if (user.rank !== 'F') {
          return total + user.credit;
        }
        return total;
      }, 0);
    },

  calculateAverageGrade(users) {
  const rankValues = {
    'A+': 4.5,
    'A': 4.0,
    'B+': 3.5,
    'B': 3.0,
    'C+': 2.5,
    'C': 2.0,
  };

  let totalGrade = 0;
  let totalCredits = 0;

  users.forEach((user) => {

    // 사용자의 등급(rank)이 rankValues 객체에 포함되어 있고 'P'가 아닌 경우.
    if (user.rank in rankValues && user.rank !== 'P') {
      totalGrade += rankValues[user.rank] * user.credit;
      totalCredits += user.credit;
    }
  });


  const averageGrade = totalGrade / totalCredits;
  const roundedAverageGrade = averageGrade.toFixed(2); // 소수점 둘째 자리까지 반올림

  return parseFloat(roundedAverageGrade); // 문자열을 숫자로 변환하여 반환

},

 calculatePercentile(users) {
   // 백분위 점수를 계산하는 메서드입니다.
    // 사용자의 총 가중 평점과 총 이수학점을 계산하여 백분위 점수를 반환합니다.

  const applicredit = this.calculateApplicredit(users);
  let totalWeightedGrade = 0;
  let totalApplicredit = 0;

  users.forEach((user) => {
    if (user.rank !== 'P') {
      totalWeightedGrade += user.credit * user.grade;
      totalApplicredit += user.credit;
    }
  });

  const percentile = (totalWeightedGrade / totalApplicredit);
  const roundedPercentile = Math.round(percentile);

  return roundedPercentile;
},


  },
 created() {
  // // userGroups 배열을 originalUserGroups에 복사하여 초기 상태를 보존합니다.

    this.originalUserGroups = JSON.parse(JSON.stringify(this.userGroups));
  },
};
</script>


