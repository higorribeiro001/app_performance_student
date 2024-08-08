# app_performance_student

> Descrição:
### Este é um aplicativo mobile desenvolvido em React Native utilizando expo além de outros recursos do framework. Também foi utilizado typescript para tipagem de atributos, além do uso do framework Tailwind.css para estilizar os templates que evitou a criação de styles e deu mais fluidez às telas. Este aplicativo só será funcional se estiver integrado à API que contém a rede neural.  

> Execução:

~~~
npm install
yarn install
~~~
#### Rodar a API:
##### Vá no reposiório: https://github.com/higorribeiro001/api-performance-student
##### Siga o passo a passo de instalação e coloque a api para rodar localmente
#### Com a API em execução na porta 8000, instale o ngrok:
~~~
npm install ngrok
yarn install ngrok
~~~
#### Crie uma conta para o Ngrok no site: https://dashboard.ngrok.com/
#### Configure o ngrok no terminal, por exemplo:
~~~
ngrok config add-authtoken 2aa9NIslt5J7lcBhoSsERYvs7Kx_3nJy78KyJhpxd1tUjK7zR
~~~
#### Criar túnel na porta 8000 com ngrok: 
~~~
ngrok http 8000
~~~
#### No settings.py da api:
##### Neste trecho de código: ALLOWED_HOSTS = ["0b79-179-162-218-180.ngrok-free.app", "127.0.0.1"]
##### Substitua este trecho "0b79-179-162-218-180.ngrok-free.app" pelo novo link gerado pelo ngrok, não esqueça de retirar "https//"
#### No aplicativo, no arquivo de "students.ts" dentro do diretório "src/api":
##### Idenfique onde o axios está configurado nas requests como por exemplo: axios.post('https://0b79-179-162-218-180.ngrok-free.app/student-performance/api/v1/'...
##### Substitua "https://0b79-179-162-218-180.ngrok-free.app" pelo novo link gerado pelo ngrok, ou configure para rodar variáveis de ambiente e substitua no arquivo ".env"
~~~
npm start
yarn start
~~~
#### Baixe o aplicativo "Expo Go" no seu smartphone
#### Coloque para ler o QRCode gerado no terminal ou digite a url manualmente, assim você terá acesso do aplicativo no seu celular. Também há outras maneiras de acessá-lo.


