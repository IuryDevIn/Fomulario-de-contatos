const form = document.getElementById('formulario');
const nome = [];
const num = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionandoLinha();
    atualizaTabela();

});

function adicionandoLinha(){
    const inputNomeContato = document.getElementById('name');
    const inputNumeroContato = document.getElementById('number');

    if(nome.includes(inputNomeContato.value)){
        alert(`O contato "${inputNomeContato.value}" ja foi inserido.`);
    } else{
        nome.push(inputNomeContato.value);
        num.push(inputNumeroContato.value);
    
        let linha = '<tr>';

        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;

    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}