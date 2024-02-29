<template>
  <div id="app" class="dark-theme">
    <header data-aos="fade-down">
      <h1>Guilherme Jansen</h1>
      <p>Full Stack Developer | DevOps | Automation Specialist | AI Expert</p>
    </header>

    <section id="skills" data-aos="fade-up" data-aos-delay="100">
      <h2>💻 Hard Skills</h2>
      <div class="skills-list">
        <div class="skill" data-aos="zoom-in" data-aos-delay="200">Linux</div>
        <div class="skill" data-aos="zoom-in" data-aos-delay="300">JavaScript</div>
        <!-- Adicione mais habilidades conforme necessário -->
      </div>
    </section>

    <section id="about" data-aos="fade-right" data-aos-delay="100">
      <h2>Sobre Mim</h2>
      <p>Sou apaixonado por tecnologia e inovação, atuando como Desenvolvedor Web Full Stack...</p>
    </section>

    <footer data-aos="fade-up">
      <h2>Conecte-se Comigo</h2>
      <a href="https://www.linkedin.com/in/guilhermejansenoficial/">LinkedIn</a>
      <!-- Adicione mais links conforme necessário -->
    </footer>
  </div>
</template>


<script>
import Vue from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css' // Importa o CSS

export default {
  name: 'App',
  mounted() {
    AOS.init(); // Inicializa AOS
  }
}
</script>
<style>
.dark-theme {
  background-color: #121212;
  color: #fff;
  min-height: 100vh; /* Garante que o fundo preencha toda a altura da tela */
}

header, footer {
  text-align: center;
  padding: 40px 20px; /* Aumenta o padding para mais espaço */
}

.skills-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px; /* Adiciona espaço acima da lista de habilidades */
}

.skill {
  margin: 10px;
  padding: 20px 30px; /* Aumenta o padding para mais espaço */
  background: #333;
  border-radius: 8px; /* Bordas mais arredondadas */
  transition: transform 0.3s ease; /* Adiciona uma transição suave */
}

.skill:hover {
  transform: translateY(-5px); /* Efeito de elevação ao passar o mouse */
}

/* Estilos para links de redes sociais */
footer a {
  color: #4da6ff; /* Cor do link */
  text-decoration: none;
  transition: color 0.3s ease;
}

footer a:hover {
  color: #81c0ff; /* Cor do link ao passar o mouse */
}

/* Adicione mais estilos conforme necessário */
</style>
