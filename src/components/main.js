// src/components/Button/confirm/loadButton.js
// src/components/main.js
function loadComponent(path, containerId) {
    return new Promise((resolve, reject) => {
        const basePath = `src/components/${path}`;
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`Container with id "${containerId}" not found.`);
            reject(`Container with id "${containerId}" not found.`);
            return;
        }
        // Carrega o HTML
        fetch(`${basePath}/index.html`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load HTML: ${response.statusText}`);
                }
                return response.text();
            })
            .then(data => {
                container.innerHTML += data; // Adiciona o conteúdo ao invés de sobrescrever
                // Carrega o CSS
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = `${basePath}/index.css`;
                document.head.appendChild(link);
                // Carrega o JavaScript
                const script = document.createElement('script');
                script.src = `${basePath}/index.js`;
                script.onload = () => resolve(); // Resolve a Promise quando o script é carregado
                document.body.appendChild(script);
            })
            .catch(error => {
                console.error(`Error loading component: ${error}`);
                reject(error);
            });
    });
}

/*
fetch('src/components/Button/button.html'):

A função fetch é usada para fazer uma solicitação HTTP para buscar o conteúdo do arquivo button.html localizado no caminho especificado.
fetch retorna uma Promise que resolve para a resposta da solicitação.
.then(response => response.text()):

O método then é chamado na Promise retornada por fetch.
A função de callback response => response.text() é executada quando a Promise é resolvida.
response.text() é um método que lê o corpo da resposta e retorna outra Promise que resolve para o conteúdo do arquivo como uma string de texto.
.then(data => { ... }):

Outro then é encadeado para lidar com a Promise retornada por response.text().
A função de callback data => { ... } é executada quando a Promise é resolvida, e data contém o conteúdo do arquivo button.html como uma string.
document.getElementById('button-container').innerHTML = data;:

O conteúdo do elemento com id="button-container" é substituído pelo conteúdo do arquivo button.html.
Isso insere o HTML do botão dentro do contêiner especificado na página.
const script = document.createElement('script');:

Um novo elemento <script> é criado dinamicamente.
script.src = 'src/components/Button/button.js';:

O atributo src do elemento <script> é definido para o caminho do arquivo button.js.
document.body.appendChild(script);:

O elemento <script> é adicionado ao final do corpo do documento (<body>).
Isso faz com que o navegador carregue e execute o script button.js, que adiciona a funcionalidade de clique ao botão.

--></body>
 */