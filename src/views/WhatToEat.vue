<template>
  <h2 style="text-align: center;">〜What's to eat?〜</h2>
  <v-container fluid>
    <p>誰と？</p>
    <v-radio-group v-model="Selected_1" inline color="green darken-5">
      <v-radio label="友達" value="友達と"></v-radio>
      <v-radio label="恋人" value="恋人と"></v-radio>
      <v-radio label="家族" value="家族と"></v-radio>
      <v-radio label="ひとり" value="ひとりで"></v-radio>
    </v-radio-group>
    <p>いつ？</p>
    <v-radio-group v-model="Selected_2" inline color="green darken-5">
      <v-radio label="朝ごはん" value="朝ごはん"></v-radio>
      <v-radio label="昼ごはん" value="昼ごはん"></v-radio>
      <v-radio label="夜ごはん" value="夜ごはん"></v-radio>
    </v-radio-group>
    <p>気分は？</p>
    <v-radio-group v-model="Selected_3" inline color="green darken-5">
      <v-radio label="ガッツリ" value="ガッツリ"></v-radio>
      <v-radio label="さっぱり" value="さっぱりな"></v-radio>
      <v-radio label="おしゃれ" value="おしゃれな"></v-radio>
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
      <v-checkbox label="店も教えてもらう" v-model="chk_restaurant" inline color="green darken-5"/>
    </div>
    <v-btn v-btn v-on:click="join()">ChatGPT送信</v-btn>
    <v-btn v-btn v-on:click="requestChatAPI()">ChatGPT送信</v-btn>
    <div v-if="question">
      <p style="margin: 20px 0px;">Q:{{ question }}</p>
      <p>A:{{ answer }}</p>
    </div>
  </v-container>
</template>

<script lang='ts' setup>
  import { ref } from "vue";
  import axios from 'axios'

  //入力値制御
  const Selected_1 = ref<string>("友達と");
  const Selected_2 = ref<string>("朝ごはん");
  const Selected_3 = ref<string>("");
  const Selected_4 = ref<string>("晴れの日に");
  const Selected_5 = ref<string>("");
  const chk_location = ref<boolean>(false);
  const chk_restaurant = ref<boolean>(false);

  //質問文を作成
  const question = ref<string>("")
  const join = () => {
    const restaurant = ref<string>("食べ物");
    const set_Selected_5 = ref<string>("");
    if (Selected_5.value && Selected_5.value !== null){
      set_Selected_5.value = Selected_5.value + 'で'
      if (chk_restaurant.value === true) {
        restaurant.value = '店'
      }
    }
    question.value = set_Selected_5.value + Selected_4.value + Selected_1.value + Selected_3.value + Selected_2.value + 'を楽しむのにおすすめの' + restaurant.value + 'を教えてください。';
    return (question);
  }

  //chatGPT_API
  const answer = ref<string>("")
  const api_key = process.env.VUE_APP_CHATGPT_API_KEY
  async function requestChatAPI() {
    join()
    console.log(question);
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${api_key}`,
    };
    const messages = [
      {
        role: "user",
        content: question.value
      },
    ];
    const payload = {
      model: "gpt-3.5-turbo",
      max_tokens: 300,
      messages: messages,
    };
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      payload,
      {
        headers: headers,
      }
    );
    answer.value = response.data.choices[0].message.content;
    return (answer);
  }

  ////位置情報取得処理
  //const latitude = ref<any>();
  //const longitude = ref<any>();
  //// ボタンを押した時の処理
  //const getAddress = () =>{
  //  // Geolocation APIに対応している
  //  if( navigator.geolocation ){
  //    // 取得に成功した場合の処理
  //    const successCallback = (position: any) => {
  //      // 緯度を取得
  //      latitude.value = position.coords.latitude;
  //      // 経度を取得
  //      longitude.value = position.coords.longitude;
  //    }
  //    // 取得に失敗した場合の処理
  //    const errorCallback = () =>{
  //      alert("位置情報が取得できませんでした");
  //    }
  //    // 位置情報を取得する
  //    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  //    }
  //  // Geolocation APIに対応していない場合
  //  else{
  //    // 現在位置を取得できない場合の処理
  //    alert( "あなたの端末では、現在位置を取得できません。" ) ;
  //  }
  //}
</script>

<style>
</style>