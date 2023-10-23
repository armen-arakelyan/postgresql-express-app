const User = require('../../models/User');
const sendJSONResponse = require('../utils/send-json-response');

const updateBalance = async (req, res, next) => {
    const userId = req.params.userId;
    const amount = parseInt(req.params.amount);

    try {
        const user = await User.findByPk(userId);

        if (!user) {
           sendJSONResponse(res, 404, 'User not found');
        }

        user.balance += amount;

        if (user.balance < 0) {
            sendJSONResponse(res, 400, 'Balance cannot be negative');
        }

        await user.save();

        sendJSONResponse(res, 200, 'Balance updated successfully');
    } catch (error) {
        sendJSONResponse(res, 500, 'An error occurred');
        next(error);
    }
};

module.exports = {
    updateBalance
};
