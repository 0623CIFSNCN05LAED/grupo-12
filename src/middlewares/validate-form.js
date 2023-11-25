const { validationResult } = require("express-validator"); 

module.exports = (redirectUrl)=>(req, res, next) => {
    const errors = validationResult(req); 
    if(!errors.isEmpty()){ 
        req.session.errors = errors.mapped();
        req.session.oldData = req.body;
        return res.redirect(redirectUrl)
    } 
    next()
       
}