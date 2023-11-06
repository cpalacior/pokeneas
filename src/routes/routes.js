const { Router } = require('express');
const { showInformation, showFrase, inicio } = require('../controllers/PokeController');

const router = Router();

router.get('/pokeinfo', showInformation);
router.get('/pokefrase', showFrase);

module.exports = router;