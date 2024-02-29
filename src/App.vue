<template>
  <div id="app" class="dark-theme">
    <!-- Cabeçalho com contadores e informações do GitHub -->
    <header data-aos="fade-down">
      <div align="right">
        <img src="https://komarev.com/ghpvc/?username=guilhermejansen&color=006bed" alt="Profile views">
        <a href="https://github.com/guilhermejansen">
          <img src="https://img.shields.io/github/followers/guilhermejansen?label=follow&style=social" alt="GitHub followers">
        </a>
      </div>
      <div align="center" data-aos="fade-up" data-aos-delay="100">
        <h1>Olá, eu sou Guilherme Jansen! 👋</h1>
        <p>Full Stack Developer | DevOps | Automation Specialist | AI Expert</p>
        <p>Sou apaixonado por tecnologia e inovação, atuando como Desenvolvedor Web Full Stack...</p>
      </div>
    </header>

    <!-- Seção de Hard Skills com ícones e badges -->
    <section id="skills" data-aos="fade-up" data-aos-delay="200">
      <h2>💻 Hard Skills</h2>
      <div class="skills-list">
        <!-- Sistemas Operacionais -->
        <div class="skill-category">
          <h3>🖥️ Sistemas Operacionais</h3>
          <div>
            <img src="https://img.shields.io/badge/-Linux-333333?style=plastic&logo=linux" alt="Linux">
            <img src="https://img.shields.io/badge/-Debian-333333?style=plastic&logo=debian" alt="Debian">
            <img src="https://img.shields.io/badge/-Windows-333333?style=plastic&logo=windows" alt="Windows">
          </div>
        </div>
        <!-- Linguagens de Programação e Frameworks -->
        <!-- Inclua mais badges e categorias conforme necessário -->
      </div>
    </section>

    <!-- Seção de Análises do GitHub -->
    <section id="github-analytics" data-aos="fade-up" data-aos-delay="300">
      <div align="center">
        <h2>⚙️ GitHub Analytics</h2>
        <img src="https://github-readme-stats.vercel.app/api?username=guilhermejansen&theme=dark&show_icons=true&hide_border=true" alt="GitHub Stats">
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=guilhermejansen&layout=compact&theme=dark&hide_border=true" alt="Top Languages">
      </div>
    </section>

    <!-- Rodapé com troféus do GitHub, contagem de visitantes e links para redes sociais -->
    <footer data-aos="fade-up" data-aos-delay="400">
      <div align="center">
        <h2>🏆 GitHub Profile Trophy</h2>
        <img src="https://github-profile-trophy.vercel.app/?username=guilhermejansen&column=8&theme=darkhub&no-frame=true&no-bg=true" alt="GitHub Profile Trophy">
      </div>
      <div align="center" data-aos="fade-up" data-aos-delay="500">
        <h2>📍 Profile Visitor Count</h2>
        <img src="https://profile-counter.glitch.me/guilhermejansen/count.svg" alt="Profile Visitor Count">
      </div>
      <div align="center" data-aos="fade-up" data-aos-delay="600">
        <h3>🌐 Conecte-se Comigo! 🌐</h3>
        <p>Segue minhas redes sociais e entra em contato para não perder nenhuma novidade!</p>
        <!-- Inclua seus links de redes sociais aqui -->
        <a href="https://www.linkedin.com/in/guilhermejansenoficial/">
          <img src="https://img.shields.io/badge/-Conecte_se_no_LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white" alt="LinkedIn">
        </a>
        <a href="mailto:guilherme@setupautomatizado.com.br">
          <img src="https://img.shields.io/badge/-Envie_um_Email-333333?style=flat-square&logo=Gmail&logoColor=white" alt="Gmail">
        </a>
        <!-- Adicione mais links de redes sociais conforme fornecido -->
      </div>
    </footer>
  </div>
</template>

<script>
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

.skill-category {
  margin: 20px 0;
  text-align: center;
}

.skill-category h3 {
  margin-bottom: 10px;
}

/* Estilos para os badges e ícones de habilidades */
.skill-category div img {
  margin: 5px;
  transition: transform 0.3s ease;
}

.skill-category div img:hover {
  transform: scale(1.1); /* Efeito de zoom ao passar o mouse */
}

/* Estilos para a seção de análises do GitHub */
#github-analytics div {
  margin-bottom: 20px;
}

#github-analytics img {
  margin: 5px;
  border-radius: 5px; /* Bordas arredondadas para as imagens */
}
/* Adicione mais estilos conforme necessário */
</style>
