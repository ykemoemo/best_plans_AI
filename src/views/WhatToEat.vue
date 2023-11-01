<template>
  <h2 style="text-align: center;">〜What's to eat?〜</h2>
  <v-container fluid>
    <p>誰と？: {{ Selected_1 }}</p>
    <v-radio-group v-model="Selected_1" inline color="green darken-5">
      <v-radio label="友達" value="友達"></v-radio>
      <v-radio label="恋人" value="恋人"></v-radio>
      <v-radio label="家族" value="家族"></v-radio>
    </v-radio-group>
    <p>いつ？: {{ Selected_2 }}</p>
    <v-radio-group v-model="Selected_2" inline color="green darken-5">
      <v-radio label="朝ごはん" value="朝ごはん"></v-radio>
      <v-radio label="昼ごはん" value="昼ごはん"></v-radio>
      <v-radio label="夜ごはん" value="夜ごはん"></v-radio>
    </v-radio-group>
    <p>気分は？: {{ Selected_3 }}</p>
    <v-radio-group v-model="Selected_3" inline color="green darken-5">
      <v-radio label="ガッツリ" value="ガッツリ"></v-radio>
      <v-radio label="さっぱり" value="さっぱり"></v-radio>
      <v-radio label="おしゃれ" value="おしゃれ"></v-radio>
      <v-radio label="なんでもいい" value="なんでもいい"></v-radio>
    </v-radio-group>
    <p>味は？: {{ Selected_4 }}</p>
    <v-radio-group v-model="Selected_4" inline color="green darken-5">
      <v-radio label="しょっぱい" value="しょっぱい"></v-radio>
      <v-radio label="甘い" value="甘い"></v-radio>
      <v-radio label="辛い" value="辛い"></v-radio>
      <v-radio label="なんでもいい" value="なんでもいい"></v-radio>
    </v-radio-group>
    <p>場所は？: {{ Selected_5}}</p>
    <v-text-field
      v-model="Selected_5"
      label="場所を入力"
      placeholder="東京都渋谷区"
      color="green darken-5"
      clearable
    ></v-text-field>
    {{joined}}<br>
    <v-btn v-btn v-on:click="join(Selected_1, Selected_2, Selected_3, Selected_4, Selected_5)">まとめる</v-btn>
  </v-container>
</template>

<script lang='ts' setup>
  import { ref } from "vue";

  const Selected_1 = ref<string>("");
  const Selected_2 = ref<string>("");
  const Selected_3 = ref<string>("");
  const Selected_4 = ref<string>("");
  const Selected_5 = ref<string>("");

  const joined = ref<string>("");
  const join = (s_1: string, s_2: string, s_3: string, s_4: string, s_5: string) => {
    joined.value=s_1+s_2+s_3+s_4+s_5;
    return (joined);
  }

  //data () {
  //  return {
  //    Selected_1: "" as string,
  //    Selected_2: "" as string,
  //    Selected_3: "" as string,
  //    Selected_4: "" as string,
  //    Selected_5: "" as string,
  //    joined: "" as string
  //  }
  //},
  //methods: {
  //    join: function(s_1: string, s_2: string, s_3: string, s_4: string, s_5: string): string{
  //        this.joined = s_1 + s_2 + s_3 + s_4 + s_5
  //        return(this.joined)
  //    }
  //}
</script>

<style>
</style>