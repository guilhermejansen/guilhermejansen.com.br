<template>
  <div id="app" class="dark-theme">
    <header>
      <h1>Guilherme Jansen</h1>
      <p>Full Stack Developer | DevOps | Automation Specialist | AI Expert</p>
    </header>

    <section id="skills">
      <h2>💻 Hard Skills</h2>
      <div class="skills-list">
        <!-- Exemplo de habilidade -->
        <div class="skill">Linux</div>
        <div class="skill">JavaScript</div>
        <!-- Adicione mais habilidades conforme necessário -->
      </div>
    </section>

    <section id="about">
      <h2>Sobre Mim</h2>
      <p>Sou apaixonado por tecnologia e inovação, atuando como Desenvolvedor Web Full Stack...</p>
    </section>

    <footer>
      <h2>Conecte-se Comigo</h2>
      <!-- Links para redes sociais -->
      <a href="https://www.linkedin.com/in/guilhermejansenoficial/">LinkedIn</a>
      <!-- Adicione mais links conforme necessário -->
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.dark-theme {
  background-color: #121212;
  color: #fff;
}

header, footer {
  text-align: center;
  padding: 20px;
}

.skills-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.skill {
  margin: 10px;
  padding: 10px;
  background: #333;
  border-radius: 5px;
}

/* Adicione mais estilos conforme necessário */
</style>
