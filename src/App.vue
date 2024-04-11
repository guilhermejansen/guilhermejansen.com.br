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
    <!-- Adiciona o botão de chat ao vivo -->
    <button class="chat-button">
      Chat Ao Vivo
    </button>

    <!-- Adiciona a imagem do perfil -->
    <div align="center" class="profile-container">
      <img src="https://s3.setupautomatizado.com.br/.../jhasv3yazyjkvy5rclt34vvi?v=1712835733829" class="profile-image" alt="Guilherme Jansen">
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
/* Novo estilo para combinar com o modelo */
.dark-theme {
  background-color: #0D1117; /* Cor de fundo atualizada para combinar com o modelo */
  color: #C9D1D9; /* Cor do texto mais suave */
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Uma fonte moderna */
}

header {
  background: #161B22; /* Cabeçalho com uma cor de fundo distinta */
  color: #58A6FF; /* Cor dos títulos no cabeçalho */
  padding: 4rem 0; /* Aumento do padding para mais espaço */
  border-bottom: 1px solid #30363D; /* Linha de separação sutil */
}

footer {
  background: #161B22; /* Rodapé com cor de fundo correspondente ao cabeçalho */
  color: #58A6FF; /* Cor dos títulos no rodapé */
  padding: 2rem 0;
  border-top: 1px solid #30363D; /* Linha de separação sutil */
}

/* Estilos dos contadores e badges GitHub */
.github-badges {
  display: flex;
  justify-content: flex-end;
  gap: 10px; /* Espaço entre os itens */
  padding-right: 2rem;
}

.github-badges img {
  transition: all 0.3s ease-in-out;
}

.github-badges img:hover {
  transform: scale(1.1);
}

/* Estilos para a lista de habilidades */
.skills-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.skill-category {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  transition: all 0.3s ease-in-out;
}

.skill-category:hover {
  background: #21262D;
  transform: translateY(-5px);
}

/* Adiciona o botão de chat */
.chat-button {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background: #58A6FF;
  color: #161B22;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
}

.chat-button:hover {
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
}

/* Adiciona borda e sombra à imagem do perfil */
.profile-image {
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
  border: 6px solid #58A6FF; /* Borda profunda com cor de destaque */
  width: 200px; /* Ajuste conforme o tamanho desejado */
  height: auto;
}

/* Adicione mais estilos conforme necessário */
</style>
