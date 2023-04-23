const User = require('../model/userModel');
const updateClickandViews = async () => {
    await User.updateMany({ authenticated: true }, {
        $push: {
            views: 0
        }
    });
    await User.updateMany({ authenticated: true }, {
        $pop: {
            views: -1
        }
    });
    await User.updateMany({ authenticated: true }, {
        $push: {
            clicks: 0
        }
    });
    await User.updateMany({ authenticated: true }, {
        $pop: {
            clicks: -1
        }
    });
}
module.exports = updateClickandViews;