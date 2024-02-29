module.exports = {
    // Opções de configuração do Vue CLI
  
    // Descomente e ajuste as opções abaixo conforme necessário para o seu projeto
  
    publicPath: process.env.NODE_ENV === 'production'
       ? '/' // Caminho base do seu projeto (usado em produção)
       : '/',
  
     outputDir: 'dist', // O diretório onde os arquivos de build serão gerados
  
     assetsDir: '', // Um diretório (relativo a outputDir) para armazenar assets (recursos estáticos)
  
    indexPath: 'index.html', // O nome do arquivo de índice de saída (relativo a outputDir)
  
     filenameHashing: true, // Se os arquivos gerados devem conter hashes para melhor controle de cache
  
     lintOnSave: process.env.NODE_ENV !== 'production', // Lint de arquivos com eslint-webpack-plugin durante o desenvolvimento
  
     runtimeCompiler: false, // Se o compilador de tempo de execução do Vue deve ser incluído no build
  
     transpileDependencies: [], // Dependências a serem transpiladas pelo Babel
  
     productionSourceMap: true, // Se os source maps devem ser gerados para produção
  
     crossorigin: undefined, // Configura o atributo "crossorigin" nas tags <link rel="stylesheet"> e <script>
  
     integrity: false, // Se os elementos <link rel="stylesheet"> e <script> devem incluir o atributo de integridade de sub-recursos (SRI)
  
     configureWebpack: {}, // Um objeto ou uma função que permite modificar a configuração do webpack
  
     chainWebpack: config => {
       config.module
         .rule('vue')
         .use('vue-loader')
          .loader('vue-loader')
           .tap(options => {
             // Modifique as opções para o carregador 'vue-loader' aqui
             return options;
           });
     },
  
     devServer: { // Configurações para o servidor de desenvolvimento
       proxy: 'http://localhost:4000', // Um proxy para redirecionar chamadas de API durante o desenvolvimento
     },
  };
  