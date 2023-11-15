<template>
    <div>
      <p style="margin: 20px 0px;">Q:{{ question }}</p>
      <p>A:{{ answer }}</p>
    </div>
    <div>
      <LoadingVue/>
    </div>
    <div style="text-align: center;">
      <v-btn v-btn v-on:click="clickToBack()">戻る</v-btn>
    </div>
</template>

<script lang='ts' setup>
  //import {defineProps} from "vue"
  //import LoadingVue from './LoadingVue.vue'
//
  //const props = defineProps<{
  //    question: string,
  //    answer: string,
  //    loading: boolean
  //}>()
//
  //const clickToBack = () =>{
  //  props.loading = false
  //}
</script>
