const router = require('express').Router();
const teamController = require('../controllers/teamController');
router.get('/', teamController.getAllTeams);
router.get('/:teamId', teamController.getTeamById);
router.get('/:conferenceId', teamController.getTeamsByConference)
router.patch('/:teamId', teamController.updateTeam);
//router.put('/custom-query', teamController.customQuery);
module.exports = router;