import { Sequelize } from "sequelize";

const conexao = new Sequelize({
    database: 'bdpadaria',
    username: 'root',
    password: 'root',
    dialect: 'mysql'
})

export default conexao;