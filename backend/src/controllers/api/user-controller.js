const usersServices = require("../../services/usersServices");

const pageSize = 5

module.exports = {
  list:async (req, res) => {

    const page = Number(req.query.page) || 1;
    const offset = (page - 1) * pageSize;
 
    const {count} = await usersServices.getAllUsersAndCount({
        pageSize, offset })


        const users = await usersServices.getAllUsers({ limit: pageSize, offset
        })
       
        const totalPages = Math.ceil(count / pageSize);
    const nextPage = page < totalPages ? `/api/users?page=${page + 1}` : null;

    // Reorganiza los usuarios para mostrar solo 5 por fila
    const organizedUsers = [];
    for (let i = 0; i < users.length; i += pageSize) {
      organizedUsers.push(users.slice(i, i + pageSize));
    }


    res.json({
        meta: {
            status: 200,
            total: count,
            url: req.originalUrl, 
            nextPage
            }, 
        //data:{ users, count: users.length}
        count,
        data: {
          users: organizedUsers.map((row) =>
          row.map((user) => ({
            id: user.id,
            name:user.firstName,
            lastName:user.lastName,
            email: user.email,
            detailUrl: `/api/user/${user.id}`
          }))),

         } 
    })
  },

  detail: async (req,res) => {
    const user = await usersServices.getUser(req.params.id);
    
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
