<template>
  <div id="app">    
    <Tareas v-if="this.$store.state.estaLogueado == 1 "/>
    <Login v-else/>
  </div>
</template>

<script>
import Tareas from './components/Tareas.vue'
import Login from './components/Login.vue'


export default {
  name: 'App',
  components: {
    Tareas,
    Login
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
