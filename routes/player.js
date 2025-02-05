const router = require('express').Router();
const playerController = require('../controllers/playerController');
router.get('/', playerController.getAllPlayers);
router.get('/:playerId', playerController.getPlayerById);
router.get('/:conferenceId', playerController.getPlayersByConference);
router.get('/:playerId/stats', playerController.getPlayerStats);
router.patch('/:playerId', playerController.updatePlayer);
//router.put('/custom-query', teamController.customQuery);
module.exports = router;