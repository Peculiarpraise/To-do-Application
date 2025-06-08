const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const authMiddleware = require('../middleware/auth');

router.use(authMiddleware);

router.get('/', async (req, res) => {
    const status = req.query.status;
    const query = { user_id: req.session.userId };
    if (status) query.status = status;
    const tasks = await Task.find(query);
    res.render('dashboard', { tasks });
});

router.post('/create', async (req, res) => {
    await Task.create({ user_id: req.session.userId, title: req.body.title });
    res.redirect('/tasks');
});

router.post('/:id/status', async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, { status: req.body.status });
    res.redirect('/tasks');
});

module.exports = router;