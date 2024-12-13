import { JSON } from "sequelize";
import { tbClientes } from "./base_temporaria_atividade.js";
import urlBackEnd from "./constantes/urls.mjs";

async function getLista() {
    const resposta = await fetch(urlBackEnd + '/clientes/listar')
    const clientes = await resposta.json();
    return clientes
}

async function novo(obj) {

    const opt = {
        method: 'post',
        headers: {
            'content-type': 'aplication/json'
        },
        body: JSON.stringify(obj)
    }

    const resposta = await fetch(urlBackEnd + '/clientes/cadastrar/')
    const cadastrado = await resposta.json();
    return cadastrado;
    tbClientes.push(obj);
}

function remove(indice) {
    //Remove um elemento do vetor
    //Começando em indice
    tbClientes.splice(indice, 1);
}

async function edita(obj, indice) {
    const opt = {
        method: 'put',
        headers: {
            'content-type': 'aplication/json'
        },
        body: JSON.stringify(obj)

    };

    const result = await fetch(urlBackEnd+ '/clientes/editar', opt)
    const editado = await resposta.json();
    return editado;
}
export { getLista, novo, remove, edita };

