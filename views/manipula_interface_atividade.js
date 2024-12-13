import { getLista, novo, remove, edita } from "./acessa_dados_clientes.js";

//Funções
function salvar() {
    const iptprimeiro_nome = document.getElementById('primeiro_nome');
    const iptsobrenome = document.getElementById('sobrenome');
    const iptcpf = document.getElementById('cpf');
    const iptemail = document.getElementById('email');
    const iptnascimento = document.getElementById('nascimento');
    const iptrua = document.getElementById('rua');
    const iptbairro = document.getElementById('bairro');
    const iptcidade = document.getElementById('cidade');
    const iptnumero = document.getElementById('numero');
    const iptuf = document.getElementById('uf');
    const ipttelefone = document.getElementById('telefone');

    const obj = {
        "primeiro_nome": iptprimeiro_nome.value,
        "sobrenome": iptsobrenome.value,
        "cpf": iptcpf.value,
        "email": iptemail.value,
        "nascimento": iptnascimento.value,
        "rua": iptrua.value,
        "bairro": iptbairro.value,
        "cidade": iptcidade.value,
        "numero": iptnumero.value,
        "uf": iptuf.value,
        "telefone": ipttelefone.value
    }
    novo(obj);
    DesenhaTabela();
};

function editar() {
    const iptid = document.getElementById('id');
    const indice = iptid.value;
    const iptprimeiro_nome = document.getElementById('primeiro_nome');
    const iptsobrenome = document.getElementById('sobrenome');
    const iptcpf = document.getElementById('cpf');
    const iptemail = document.getElementById('email');
    const iptnascimento = document.getElementById('nascimento');
    const iptrua = document.getElementById('rua');
    const iptbairro = document.getElementById('bairro');
    const iptcidade = document.getElementById('cidade');
    const iptnumero = document.getElementById('numero');
    const iptuf = document.getElementById('uf');
    const ipttelefone = document.getElementById('telefone');

    const obj = {
        "primeiro_nome": iptprimeiro_nome.value,
        "sobrenome": iptsobrenome.value,
        "cpf": iptcpf.value,
        "email": iptemail.value,
        "nascimento": iptnascimento.value,
        "rua": iptrua.value,
        "bairro": iptbairro.value,
        "cidade": iptcidade.value,
        "numero": iptnumero.value,
        "uf": iptuf.value,
        "telefone": ipttelefone.value
    };

    edita(obj, indice);
    DesenhaTabela();
}

function ManipulaSalvar(event) {
    event.preventDefault();
    if (document.getElementById('id').value) {
        editar();
    } else {
        salvar();
    }
    document.getElementById('form_Cliente').reset();
}

function ManipulaExcluir(event) {
    const indice = event.target.getAttribute('data-indice');
    remove(indice);
    DesenhaTabela();
}

function ManipulaEditar(event) {
    const indice = event.target.getAttribute('data-indice');
    const dados = getLista();
    document.getElementById('id').value = indice;
    document.getElementById('primeiro_nome').value = dados[indice].primeiro_nome;
    document.getElementById('sobrenome').value = dados[indice].sobrenome;
    document.getElementById('cpf').value = dados[indice].cpf;
    document.getElementById('email').value = dados[indice].email;
    document.getElementById('nascimento').value = dados[indice].nascimento;
    document.getElementById('rua').value = dados[indice].rua;
    document.getElementById('bairro').value = dados[indice].bairro;
    document.getElementById('cidade').value = dados[indice].cidade;
    document.getElementById('numero').value = dados[indice].numero;
    document.getElementById('uf').value = dados[indice].uf;
    document.getElementById('telefone').value = dados[indice].telefone;
}

async function DesenhaTabela() {
    const tbody = document.getElementById('tbody1');
    tbody.innerHTML = ''; 
    const dados = await getLista();
    for (let i = 0; i < dados.length; i++) {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        const td5 = document.createElement('td');
        const td6 = document.createElement('td');
        const td7 = document.createElement('td');
        const td8 = document.createElement('td');
        const td9 = document.createElement('td');
        const td10 = document.createElement('td');
        const td11 = document.createElement('td');
        const td12 = document.createElement('td');
        const btExc = document.createElement('button');
        const btEdi = document.createElement('button');

        btExc.innerText = 'EXCLUIR';
        btExc.setAttribute('data-indice', i);
        btExc.addEventListener('click', ManipulaExcluir)

        btEdi.innerText = 'Editar';
        btEdi.setAttribute('data-indice',i);
        btEdi.addEventListener('click', ManipulaEditar);

        td1.innerText = dados[i].primeiro_nome;
        td2.innerText = dados[i].sobrenome;
        td3.innerText = dados[i].cpf;
        td4.innerText = dados[i].email;
        td5.innerText = dados[i].nascimento;
        td6.innerText = dados[i].rua;
        td7.innerText = dados[i].bairro;
        td8.innerText = dados[i].cidade;
        td9.innerText = dados[i].numero;
        td10.innerText = dados[i].uf;
        td11.innerText = dados[i].telefone;
        td12.append(btExc, btEdi);
        tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9, td10, td11, td12);
        tbody.append(tr);
    }
}

//Viculações
const btsSalvar = document.getElementById('btSalvar');
btsSalvar.addEventListener('click', ManipulaSalvar);

window.addEventListener('load', DesenhaTabela());