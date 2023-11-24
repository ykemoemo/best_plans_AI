<template>
    <div>
      <p style="margin: 20px 0px;">Q:{{ question }}</p>
      <p style="margin-bottom: 20px;">A:{{ answer }}</p>
    </div>
    <div v-show="loading">
      <LoadingVue/>
    </div>
    <div style="text-align: center;">
      <v-btn v-btn v-on:click="clickToBack()">戻る</v-btn>
    </div>
</template>

<script lang='ts' setup>
  import { ref } from "vue";
  import axios from 'axios'
  import LoadingVue from './LoadingVue.vue'

  // eslint-disable-next-line no-undef
  defineExpose({ requestChatAPI });
  // eslint-disable-next-line no-undef
  const emit = defineEmits(['invertAnswerHidden'])

  //chatGPT_API
  const question = ref<string>("")
  const answer = ref<string>("")
  const api_key = ref<string>(process.env.VUE_APP_CHATGPT_API_KEY)
  async function requestChatAPI(ser_question: string) {
    invertLoadingHidden()
    question.value = ser_question
    console.log(question);
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${api_key.value}`,
    };
    const messages = [
      {
        role: "user",
        content: ser_question
      },
    ];
    const payload = {
      model: "gpt-3.5-turbo",
      max_tokens: 500,
      messages: messages,
    };
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      payload,
      {
        headers: headers,
      }
    );
    answer.value = response.data.choices[0].message.content
    invertLoadingHidden()
    console.log(answer);
  }

  //ローディング画面表示の切り替え
  const loading = ref<boolean>(false)
  const invertLoadingHidden = (): void =>{
    loading.value = !loading.value
  }

  //戻るボタン押下時
  const clickToBack = (): void =>{
    emit('invertAnswerHidden')
    question.value = ""
    answer.value = ""
  }

</script>
