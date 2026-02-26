const express = require('express');
const userRoutes = require('./routes/user.routes');
require('./database/db');

const app = express();

app.use(express.json());
app.use(userRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});