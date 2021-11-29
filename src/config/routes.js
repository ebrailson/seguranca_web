const express = require('express');
const router = express.Router();
const HomeControllers = require("../controllers/home_controllers");
const UsuariosControllers = require("../controllers/usuarios_controllers");

router.get('/', HomeControllers.index)
router.get('/sobre', HomeControllers.sobre)
router.get('/usuarios', UsuariosControllers.index)


module.exports = router;
