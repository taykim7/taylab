<template>
  <div>
    <div>
      <button @click="adjustDate(0)">오늘</button>
      <i class="fas fa-trash-alt"></i>
      <div>
        <button @click="adjustDate(-1)">←</button>
        <h1>{{ year + '.' + month + '.' + date + ' ' + day  }}</h1>
        <button @click="adjustDate(+1)">→</button>
      </div>
    </div>
    <hr>
    <div>
      <button @click="adjustWeight(65)">65</button>
      <button @click="adjustWeight(70)">70</button>
      <button @click="adjustWeight(75)">75</button>
      <div>
        <button @click="adjustWeight(-0.1)">전</button>
        <h1> {{ myWeight }} </h1>
        <button @click="adjustWeight(+0.1)">후</button>
      </div>
    </div>
    <hr>
    <button>:)</button>
    <input type="text" v-model="myComment">
    <button @click="saveMyComment()">저장</button>
    <button>분석</button>
  </div>
</template>

<script>

export default {
  data: function(){
    return {
      // 날짜 관련
      nowDate: {},
      year: '',
      month: '',
      date: '',
      day: '',
      dayList: ['일', '월', '화', '수', '목', '금', '토'],
      // 무게 관련
      myWeight: 0,
      // 코멘트 관련
      myComment: ''
    }
  },
  created() {
    this.nowDate = new Date();
    this.init()
  },
  methods: {
    init() {
      this.initDate()
      this.initWeight()
    },
    initDate() {
      this.year = this.nowDate.getFullYear();
      this.month = ('0' + (this.nowDate.getMonth() + 1)).slice(-2);
      this.date = ('0' + this.nowDate.getDate()).slice(-2);
      this.day = this.dayList[this.nowDate.getDay()];
    },
    // 날짜 조정
    adjustDate(i) {
      if (i == 0) {
        this.nowDate = new Date();
      } else {
        this.nowDate.setDate(this.nowDate.getDate() + i)
      }
      this.initDate();
    },
    initWeight() {
      // ※ TODO : 어제 날짜
      this.myWeight = 70.0;
    },
    // 무게 조정
    adjustWeight(i) {
      if (i >= 60) {
        this.myWeight = i
      } else {
        this.myWeight = Math.round((this.myWeight += i) * 10)/10
      }
    },
    // 코멘트
    saveMyComment() {
      // ※ TODO : 해당 내용대로 업데이트
      alert(this.year + '' + this.month + '' + this.date + ' / ' + this.myWeight + ' / ' + this.myComment);
    }
  }
}
</script>

<style>

</style>