import express from 'express';
import rotas_clientes from './rotas/rotas_clientes.mjs';

const app = express();

app.use(express.json());

app.use('/clientes', rotas_clientes);
app.use(express.static('./views'));

app.listen(80, '127.0.0.1', function () {
    console.log('Escutando.')
});
