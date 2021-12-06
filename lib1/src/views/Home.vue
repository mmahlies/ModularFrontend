<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorldLib msg="Welcome to Your Vue.js App Sub project 12"/>
  </div>
</template>

<script>
// @ is an alias to /src
 import HelloWorldLib from '../components/HelloWorldLib.vue'
 import Vue from 'vue'
 Vue.component(HelloWorldLib.name, HelloWorldLib);
export default {
  name: 'Home',
  components: {
     HelloWorldLib
  }
}
</script>
