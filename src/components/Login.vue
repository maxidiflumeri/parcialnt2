<template>

  <section class="src-components-login">
    <div class="container">
      <div class="jumbotron bg-secondary">
        <vue-form :state="formState" @submit.prevent="login()">


          <label for="descripcion" class="mt-3 text-white">Usuario</label>
          <input
            type="text"
            class="form-control"
            id="usuario"
            name="usuario"
            autocomplete="off"        
            v-model = "usuario"
            required
          />

          <label for="clave" class="mt-3 text-white">Clave</label>
          <input
            type="text"
            class="form-control"
            id="clave"
            name="clave"
            autocomplete="off"
            v-model = "clave"
            required
          />

          <button class="btn btn-success mt-3" type="submit" :disabled="formState.$invalid">Login</button>

        </vue-form>  

      </div>
    </div>
   

  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-login',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState: {},
        usuario: '',
        clave: ''
      }
    },
    methods: {
      login(){
        if(this.usuario == 'root' && this.clave == '1234'){
          this.$store.dispatch('login', 1)
        }

      }

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-login {

  }
</style>
