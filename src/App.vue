<template>
  <v-app>
    <v-main>
      <h1>Best plans AI</h1>
      <WhatToEat/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WhatToEat from './components/WhatToEat.vue'

export default defineComponent({

  components: {
    WhatToEat,
  },

  data () {
    return {
      //
    }
  },
})
</script>

<style>
  .v-main{
    margin: 0 auto;
  }
</style>