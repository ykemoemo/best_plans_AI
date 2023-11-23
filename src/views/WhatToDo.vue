<template>
  <h2 style="text-align: center;">〜What's to do?〜</h2>
  <v-container fluid v-show="!answer_hidden">
    <p>誰と？</p>
    <v-radio-group v-model="Selected_1" inline color="green darken-5">
      <v-radio label="友達" value="友達と"></v-radio>
      <v-radio label="恋人" value="恋人と"></v-radio>
      <v-radio label="家族" value="家族と"></v-radio>
      <v-radio label="ひとり" value="ひとりで"></v-radio>
    </v-radio-group>
    <p>いつ？</p>
    <v-radio-group v-model="Selected_2" inline color="green darken-5">
      <v-radio label="朝" value="朝から"></v-radio>
      <v-radio label="昼" value="昼から"></v-radio>
      <v-radio label="夜" value="夜から"></v-radio>
      <v-radio label="一日中" value="一日中"></v-radio>
    </v-radio-group>
    <p>気分は？</p>
    <v-radio-group v-model="Selected_3" inline color="green darken-5">
      <v-radio label="のんびり過ごしたい" value="のんびり"></v-radio>
      <v-radio label="アクティブに過ごしたい" value="アクティブに"></v-radio>
      <v-radio label="おしゃれなことがした" value="おしゃれに"></v-radio>
      <v-radio label="なんでもいい" value=""></v-radio>
    </v-radio-group>
    <p>気候は？</p>
    <v-radio-group v-model="Selected_4" inline color="green darken-5">
      <v-radio label="晴れ" value="晴れの日に"></v-radio>
      <v-radio label="雨" value="雨の日に"></v-radio>
      <v-radio label="曇り" value="曇りの日に"></v-radio>
      <v-radio label="暑い" value="暑い日に"></v-radio>
      <v-radio label="寒い" value="寒い日に"></v-radio>
    </v-radio-group>
    <v-checkbox label="場所を指定する" v-model="chk_location" inline color="green darken-5"/>
    <div v-show="chk_location">
      <p>場所は？</p>
      <v-text-field
        v-model="Selected_5"
        label="場所を入力"
        placeholder="渋谷駅周辺"
        color="green darken-5"
        clearable
      ></v-text-field>
      <v-checkbox label="施設も知りたい" v-model="chk_restaurant" inline color="green darken-5"/>
    </div>
    <div style="text-align: center;">
      <v-btn v-btn v-on:click="clickSubmit()">送信</v-btn>
    </div>
  </v-container>
  <v-container fluid v-show="answer_hidden">
    <AnswerVue ref="answerVue" @invertAnswerHidden="invertAnswerHidden"/>
  </v-container>
</template>

<script lang='ts' setup>
  import { ref } from "vue";
  import AnswerVue from './components/AnswerVue.vue';

  //送信ボタン押下時
  const answerVue = ref();
  const clickSubmit = () =>{
    invertAnswerHidden()
    join()
    answerVue.value.requestChatAPI(set_question.value)
  }

  //質問文を作成
  const Selected_1 = ref<string>("友達と");
  const Selected_2 = ref<string>("朝から");
  const Selected_3 = ref<string>("");
  const Selected_4 = ref<string>("晴れの日に");
  const Selected_5 = ref<string>("");
  const set_question = ref<string>("")
  const chk_location = ref<boolean>(false);
  const chk_restaurant = ref<boolean>(false);
  const join = () => {
    const restaurant = ref<string>("過ごす方法");
    const set_Selected_5 = ref<string>("");
    if (chk_location.value && Selected_5.value){
      set_Selected_5.value = Selected_5.value + 'で'
      if (chk_restaurant.value === true) {
        restaurant.value = '過ごせるの施設'
      }
    }
    set_question.value = set_Selected_5.value + Selected_4.value + Selected_1.value + Selected_2.value + Selected_3.value + restaurant.value + 'を教えてください。';
  }

  //ページの切り替え
  const answer_hidden = ref<boolean>(false)
  const invertAnswerHidden = () => {
      answer_hidden.value = !answer_hidden.value
  }
</script>

