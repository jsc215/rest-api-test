const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  stock: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Stock' }]
});

const StockSchema = new mongoose.Schema({});

let User = mongoose.model('User', UserSchema);

let Stock = mongoose.model('Stock', StockSchema);
// module.exports = { Stock };

module.exports = { User, Stock };
