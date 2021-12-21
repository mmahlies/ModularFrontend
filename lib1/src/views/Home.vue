<template>
  <div class="home">
    -3
    <HelloWorldLib msg="Welcome to Your Vue.js App Sub project 12"/>
  </div>
</template>

<script>
// @ is an alias to /src
 import HelloWorldLib from '@/components/HelloWorldLib.vue'
 // import HelloWorldLib from '../components/HelloWorldLib.vue'

 var en = "../components/en";
 console.log(en);
 import Vue from 'vue'
 Vue.component(HelloWorldLib.name, HelloWorldLib);
export default {
  name: 'Home',
  components: {
     HelloWorldLib
  }
}
</script>
