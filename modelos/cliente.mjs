import { DataTypes } from "sequelize";
import conexao from "../database/mysql.mjs";

const Cliente = conexao.define('Cliente', {
    primeiro_nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING,
    nascimento: DataTypes.STRING,
    rua: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    numero: DataTypes.STRING,
    uf: DataTypes.STRING,
    telefone: DataTypes.STRING
});

Cliente.sync();

export default Cliente;