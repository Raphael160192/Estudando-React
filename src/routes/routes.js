const express = require('express');
const UsuarioController = require ('../controllers/usuarioControler');
const router = express.Router();

router.post('/usuarios', UsuarioController.Insert);

module.exports = router;