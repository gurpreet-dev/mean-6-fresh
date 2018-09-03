const todoCtrl = require('../controllers/todos.controller');
const express = require('express');
const router = express.Router();

router.route('/')
    .get(todoCtrl.all);

module.exports = router;