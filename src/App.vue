<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div>
    <h1>Menú de la página</h1>
    <MenuComponent/>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import HolaMundo from './components/HolaMundo.vue'
//import HomeComponent from './components/HomeComponent.vue'
//import CineComponent from './components/CineComponent.vue'
//import MusicaComponent from './components/MusicaComponent.vue'
import MenuComponent from './components/MenuComponents.vue'

export default {
  name: 'App',
  components: {
    MenuComponent
  }
}
</script>

<style>
#app 
  {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
