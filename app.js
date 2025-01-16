//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let arrayAmigos = [];
let idsSorteados = [];
let nomeAmigo = document.querySelector('#nomeAmigo');
let btnAdd = document.querySelector('#btnAdd');
let listaAmigos = document.querySelector('#listaAmigos');
let resultado = document.querySelector('#resultado');

listaAmigos.innerHTML = '';
resultado.innerHTML = '';

document.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        btnAdd.click();
    }
});

function listarAmigos(arrAmigos){
    let listagem = '';
    for(let x = 0; x < arrAmigos.length; x++){
        listagem += `<li>${arrAmigos[x]}</li>`;
    }
    listaAmigos.innerHTML = '';
    listaAmigos.innerHTML = listagem;
}

function adicionarAmigo(){
    let inputAmigo = nomeAmigo.value;

    if(resultado.classList.contains('final') == true){
        let finalizado = confirm(`Você clicou em "Adicionar Amigo", porém o sorteio do Amigo Secreto já está finalizado.\n\nCaso a sua intenção seja descartar o sorteio anterior e adicionar novos nomes à listagem existente para, posteriormente, realizar um novo sorteio, clique em "OK".\n\nPorém, caso você deseje apenas criar uma nova listagem para o Amigo Secreto, exluindo os ${arrayAmigos.length} nomes cadastrados, cliquem em "CANCELAR".`);
        if(inputAmigo === ''){
            alert('Nenhum nome inserido.\nDados mantidos sem alteração.');
            return false;
        }

        resultado.classList.remove('final');
        if(finalizado === false){
            arrayAmigos = [];
            idsSorteados = [];
        }
    }

    if(inputAmigo === ''){
        alert('Por favor, insira o nome de um amigo para continuar.');
    }else if(arrayAmigos.includes(inputAmigo)){
        let repetido = confirm(`O nome "${inputAmigo}" já está incluído na listagem de Amigos Secretos.\n\nSe deseja adicionar outra pessoa com o mesmo nome, clique em "OK".\nCaso contrário, cliquem em "CANCELAR".`);
        if(repetido === true){
            arrayAmigos.push(inputAmigo);
        }
    }else{
        arrayAmigos.push(inputAmigo);
    }
    nomeAmigo.value = '';
    resultado.innerHTML = '';
    listarAmigos(arrayAmigos);
}

function gerarIdAleatorio(arrAmigos){
    let idEscolhido = Math.floor(Math.random() * arrAmigos.length);

    if(idsSorteados.includes(idEscolhido)){
        if(arrAmigos.length > idsSorteados.length){
            return gerarIdAleatorio(arrAmigos);
        }else{
            alert('Todos os nomes disponíveis na lista de Amigos Secretos já foram sorteados.');
            return false;
        }
    }else{
        idsSorteados.push(idEscolhido);
        return idEscolhido;
    }
}

function listarSorteados(arrAmigos, arrIds){
    let listagem = '';
    for(let x = 0; x < arrIds.length; x++){
        listagem += `<li>${arrAmigos[arrIds[x]]}</li>`;
    }
    resultado.innerHTML = '';
    resultado.innerHTML = listagem;
}

function sortearAmigo(){
    if(arrayAmigos.length > 0){
        if(resultado.classList.contains('final') == true && idsSorteados.length < 2){
            let adicional = confirm(`Você clicou em "Sortear Amigo", porém o sorteio do Amigo Secreto já está finalizado.\n\nCaso a sua intenção seja criar uma lista com diversos sorteados, clique em "OK".\n\nPorém, caso você deseje apenas sortear um Amigo Secreto diferente, cliquem em "CANCELAR".`);
            if(adicional === false){
                idsSorteados = [];
                resultado.innerHTML = '';
            }
        }else{
            resultado.classList.add('final');
        }

        let idAleatorio = gerarIdAleatorio(arrayAmigos);
        if(idAleatorio !== false){
            listaAmigos.innerHTML = '';
            listarSorteados(arrayAmigos, idsSorteados);
        }
    }else{
        alert('Antes de sortear, você precisa criar uma lista de amigos!');
    }
}