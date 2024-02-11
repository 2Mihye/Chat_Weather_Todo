
const express = require("express");
const app = express();
const router = express.Router();

// Main Router
router.get("/", function(req, res){
    res.render("home");
});

// Todo Router
const TodoRouter = require('./todo/todo');

// Weather Router
const WeatherRouter = require('./weather/weather');

// Chat Router
const ChatRouter = require('./chat/chat');

// Refactoring
router.use('/todo', TodoRouter);
router.use('/weather', WeatherRouter);
router.use('/chat', ChatRouter);

module.exports = router;