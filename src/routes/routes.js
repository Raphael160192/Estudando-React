const express = require('express');
const UsuarioController = require ('../controllers/usuarioControler');
const router = express.Router();

router.post('/usuarios', UsuarioController.Insert);
router.get('/usuarios', UsuarioController.SearchAll);

module.exports = router;