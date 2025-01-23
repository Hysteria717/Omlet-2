const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Obtém a porta do ambiente ou usa a porta 3000 como padrão
const PORT = process.env.PORT || 3000;

// Configura o middleware CORS
app.use(cors());

// Configurações de middlewares
app.use(bodyParser.json());

// Rota para registro de usuários
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Por favor, preencha todos os campos.' });
    }

    console.log('Novo usuário registrado:');
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);

    res.status(200).json({ message: 'Usuário registrado com sucesso!' });
});

// Configuração para a rota raiz (opcional, pode servir um arquivo HTML ou apenas uma mensagem)
app.get('/', (req, res) => {
    res.send('Servidor do Omlet Arcade 2 está funcionando!');
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
