<template class="q-pa-md q-gutter-md">
	<q-card-section>Message: {{ msg }}</q-card-section>
  <q-card-section>Using text interpolation: {{ rawHtml }}</q-card-section>
  <q-card-section>Using v-html directive: <span v-html="rawHtml"></span></q-card-section>
  <q-card-section>
    <q-btn
      unelevated
      color="primary"
      type="a"
      target="_blank"
      v-bind:id="linkId"
      v-bind:href="link.to"
      :title="link.title"
      :label="link.label"
    ></q-btn>
  </q-card-section>
  <q-card-section>
    <q-btn :disable="isButtonDisabled" label="버튼 보이기"></q-btn>
  </q-card-section>


  <q-card-section>
    {{ number + 1 }}
  </q-card-section>
  <q-separator />
  <q-card-section>{{ ok ? "YES" : "NO" }}</q-card-section>
  <q-separator />
  <q-card-section>
  {{ message.split("").reverse().join("") }}
  </q-card-section>
	<q-separator />
  <q-card-section :id="`list-${id}`"> list-{{ id }} </q-card-section>
  <q-separator />


  <q-card-section class="text-h6">
    {{ calculateDate() }}
  </q-card-section>
  <q-separator />


  <q-card-section v-if="!seen"> Now you see me </q-card-section>
  <q-card-section v-else> on no! </q-card-section>
  <q-separator />
  <q-btn @click="awesome = !awesome" label="toggle"></q-btn>
  <q-card-section v-if="awesome"> Vue is awesome! </q-card-section>
  <q-card-section v-else> on no! </q-card-section>
  <q-separator />
  <q-card-section v-if="type == 'A'"> A </q-card-section>
  <q-card-section v-else-if="type === 'B'"> B </q-card-section>
  <q-card-section v-else-if="type === 'C'"> C </q-card-section>
  <q-card-section v-else> Not A/B/C </q-card-section>
  <q-separator />


  <div class="q-pa-md row items-start">
  <q-btn @click="increment" label="카운트" color="primary"></q-btn>
  <q-card-section>methodCount is: {{ methodCount }}</q-card-section>
</div>
<q-separator />


</template>

<script>
import { date } from 'quasar'
export default {

  title:"Vue Basic",
  name:"VueEx",
  components:{},
  data(){
    return{
      msg: "hello Vue",
      rawHtml: `<span style="color: red">빨간색이어야 합니다.</span>`,
      linkId: "vue",
	      link: {
	        to: "http://vuejs.org",
	        title: "뷰 공식 사이트",
	        label: "Vuejs.org",
	      },
      isButtonDisabled: true,
      ok:true,
      number: 1000,
	      message:
	        "지금까지 템플릿의 단순한 속성만 있었습니다. 그러나 Vue는 실제로 모든 데이터가 내에서 JavaScript 강화의 모든 기능을 지원합니다.",
	      id: "genie",
        seen: true,
	      awesome: true,
	      type: "B",
        methodCount: 1
    }
  },
  computed:{

  },
  watch:{

  },
 // `mounted`는 나중에 설명할 생명 주기 훅입니다.

  methods:{
    calculateDate() {
      const timeStamp = Date.now();
      const formattedString = date.formatDate(timeStamp, "YYYY-MM-DD HH:mm");
      return formattedString;
		},

    increment(){
      this.methodCount++
    },

    mutateDeeply() {
      // 변경 사항이 감지됩니다.
      this.obj.nested.count++
      this.obj.arr.push('baz')},
  },
  mounted() {
    // `this`는 컴포넌트 인스턴스를 나타냅니다.
    console.log(this.methodCount) // => 1
    // 값을 변경할 수 있습니다.
    this.methodCount= 2
    console.log(this.methodCount) // => 2
    this.increment()
  },
}
</script>

<style>

</style>
