<template>
  <v-app>




    <v-main >

      <Navbar></Navbar>
      <v-content class="ml-1 mt-2">
        <router-view></router-view>
      </v-content>



    </v-main>

  </v-app>

</template>

<script>

import Navbar from "./components/Navbar";



export default {
  name: "App",

  components: { Navbar},


  data () {
    //re
},
};
</script>
