const userServices = require("../../services/usersServices");
const usersServices = require("../../services/usersServices");


module.exports = {
  list:async (req, res) => {
        const users = await usersServices.getAllUsers({
        })
        const count =users.length;

    res.json({
        meta: {
            status: 200,
            url: req.originalUrl, 
            }, 
        //data:{ users, count: users.length}
        count,
        data: {
          users:
          users.map((user) => ({
            id: user.id,
            name:user.firstName,
            lastName:user.lastName,
            email: user.email,
            detailUrl: `/api/user/${user.id}`
          })),

         } 
    })
  },

  detail: async (req,res) => {
    const user = await userServices.getUser(req.params.id);
    
    res.json({
      meta: {
          status: 200,
          url: "/api/user/:id", 
          }, 
     
      data: {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      birthday: user.birthday,
      phone: user.phone,
      avatar: user.avatar,
      adress: user.adress

    }
})
} }
