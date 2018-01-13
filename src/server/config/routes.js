var decksController = require('../controllers/membersController.js');

module.exports = function (app) {
    app.get("/api/members", decksController.index);
}
