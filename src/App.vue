<template>
  <div id="app">
    <iframe
      src="https://www.workana.com/freelancer/4ca6d1ca844516f3c227ebccff56be97"
      frameborder="0"
      style="border:none; overflow:hidden; width:100vw; height:100vh; margin:auto; display:block;"
      scrolling="no"
    ></iframe>
  </div> 
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Remove as margens padrões e define a largura e altura para ocupar toda a tela */
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden; /* Evita a barra de rolagem na página do Vue */
}

iframe {
  position: absolute; /* Permite que o iframe ocupe toda a tela */
  top: 0;
  left: 0;
}
</style>
