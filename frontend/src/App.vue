
<template>
   <div id="app" fluid>
    
      <nav>
        <n-space id="navbar" justify="space-between">
        <button>Login</button>
        </n-space>
      </nav>
      <router-view/>
    

  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: hsl(210, 29%, 24%);
 
}
#navbar {
padding: 10px;

}

</style>
