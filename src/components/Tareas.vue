<template>

  <section class="src-components-tareas">
    <div class="container">
      <div class="jumbotron m-3 bg-secondary">
        <p class="text-white">Respuestas: 1-d, 2-c, 3-c, 4-d, 5-a, 6-b, 7-d, 8-d, 9-d, 10-b</p>
        <h1 class="text-white">Generación de Tareas</h1>
        <hr />
        <vue-form :state="formState" @submit.prevent="enviar()">

          <validate tag="div">
            <label for="descripcion" class="mt-3 text-white">Descripcion</label>
            <input
              type="text"
              class="form-control"
              id="descripcion"
              name="descripcion"
              autocomplete="off"
              v-model.trim="formData.descripcion"
              :maxlength="nombreChrMax"
              :minlength="nombreChrMin"
              required
            />

            <field-messages name="descripcion" show="$dirty">
              <!-- <div class="alert alert-success my-1">Campo correcto</div> -->
              <div slot="required" class="alert alert-danger my-1">Campo descripcion requerido</div>            
              <div slot="minlength" class="alert alert-danger my-1">Se deben ingresar como mínimo {{nombreChrMin}} caracteres</div>
              <div v-if="formData.descripcion.length == nombreChrMax" class="alert alert-danger my-1">Máximo de caracteres alcanzados ({{nombreChrMax}})</div>
            </field-messages>
          </validate>

          <validate tag="div">
            <label for="nombre" class="mt-3 text-white">Nombre</label>
            <input
              type="text"
              class="form-control"
              id="nombre"
              name="nombre"
              autocomplete="off"
              v-model.trim="formData.nombre"
              required
            />

            <field-messages name="nombre" show="$dirty">      
              <div slot="required" class="alert alert-danger my-1">Campo Nombre requerido</div>
            </field-messages>

          </validate>

          <validate tag="div">
            <label for="email" class="mt-3 text-white">Correo Electrónico</label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              autocomplete="off"
              v-model="formData.email"            
              required
            />

            <field-messages name="email" show="$dirty">
              <div slot="required" class="alert alert-danger my-1">Campo Correo Electrónico requerido</div>
              <div slot="email" class="alert alert-danger my-1">Correo Electrónico no válido</div>
            </field-messages>
          </validate>

          <br>
          <button class="btn btn-success mt-1" type="submit" :disabled="formState.$invalid">Agregar Tarea</button>         

        </vue-form>     
        <button class="btn btn-success mt-1" type="submit" @click="logout()">Logout</button>

        <div v-if="this.tareas==0">
          <div class="alert alert-danger mt-5">
              No hay tareas
          </div>
        </div> 
        <div v-else>
          <table class="table bg-dark mt-5">
            <thead>
              <tr>
                <th class="text-white">ID</th>
                <th class="text-white">Descripcion</th>
                <th class="text-white">Nombre</th>
                <th class="text-white">Correo Electronico</th>
                <th class="text-white">Fecha Creacion</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(tarea, index) in this.tareas" :key="index">
                <td class="text-white" scope="row">{{ tarea.id }}</td>            
                <td class="text-white">{{tarea.descripcion}}</td>
                <td class="text-white">{{tarea.nombre}}</td>
                <td class="text-white">{{tarea.email}}</td>
                <td class="text-white">{{tarea.createdAt |formatearFecha}}</td>
              </tr>
            </tbody>

          </table> 

        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-tareas',
    props: [],
    mounted () {
      this.getTareas()

    },
    updated(){
      

    },
    data () {
      return {
        formState: {},
        formData: this.getDatosIniciales(),
        nombreChrMin: 10,
        nombreChrMax: 50,
        tareas: [],

      }
    },
    methods: {
      getDatosIniciales(){
        return {
          descripcion: '',
          nombre: '',
          email: ''
        }
      },

      enviar() {
        console.log(this.formData)
        this.axios.post('https://5eb71233875f1a00167e1351.mockapi.io/Tareas/', this.formData, {
          'content-type' : 'application/json'
        })
        .then( res => {
          console.log(res.data)
          this.formData = this.getDatosIniciales()
          this.formState._reset()
          this.getTareas()
        })
        .catch(error => {
          console.log('ERROR POST', error)
        })
      },

      getTareas(){
        this.axios.get('https://5eb71233875f1a00167e1351.mockapi.io/Tareas')
        .then(res => {
          this.tareas = res.data     
          console.log(this.tareas)         
        })
        .catch(error => {
            console.log('ERROR GET', error)
        })  
      },

      logout(){
        console.log("logout")
        this.$store.dispatch('logout', 0)
      }

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  hr{
    background-color: white;
  }
</style>
