// Função para ler todas as cores da página e inseri-las em um vetor
function obterTodasAsCores() {
    const elementosDeCor = document.querySelectorAll('#colornamestable .colornamespan a');
    const cores = [];
    elementosDeCor.forEach(elemento => {
        const nomeDaCor = elemento.textContent.trim().toLowerCase();
        if (nomeDaCor && !cores.includes(nomeDaCor)) {
            cores.push(nomeDaCor);
        }
    });
    return cores;
}

// Função para escolher 10 cores aleatórias do vetor de cores
function escolherCoresAleatorias(cores, num = 10) {
    const embaralhado = cores.sort(() => 0.5 - Math.random());
    return embaralhado.slice(0, num);
}

// Função para escolher uma cor aleatória dentre as 10 cores escolhidas e imprimi-la no console
function imprimirCorAleatoria(cores) {
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    const elementosDeCor = document.querySelectorAll('#colornamestable .innerbox');
    let corHex = 'N/A';
    elementosDeCor.forEach(elemento => {
        const elementoNomeDaCor = elemento.querySelector('.colornamespan a');
        if (elementoNomeDaCor && elementoNomeDaCor.textContent.trim().toLowerCase() === corAleatoria) {
            const elementoHex = elemento.querySelector('.colorhexspan a');
            if (elementoHex) {
                corHex = elementoHex.textContent.trim();
            }
        }
    });
    console.log(`Cor selecionada: ${corAleatoria} (${corHex})`);
}

// Executando as funções
const todasAsCores = obterTodasAsCores();
const coresAleatorias = escolherCoresAleatorias(todasAsCores);
console.log('10 cores aleatórias:', coresAleatorias);
imprimirCorAleatoria(coresAleatorias);