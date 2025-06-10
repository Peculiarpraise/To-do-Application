const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    status: { type: String, enum: ['pending', 'completed', 'deleted'], default: 'pending' },
    createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Task', taskSchema);