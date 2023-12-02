const userService = require("../../services/usersServices");


module.exports = {
  list:async (req, res) => {
        const users = await usersServices.getAllUsers({
        })

    res.json({
        meta: {
            status: 200,
            url: req.originalUrl, 
            }, 
        data: users
    })
  },
};
