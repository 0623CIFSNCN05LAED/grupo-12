const multer = require('multer'); 
const path = require('path');


const storage = multer.diskStorage({
    destination: path.join(__dirname, '../../public/images/users'),
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + '-' + Date.now() + path.extname(file.originalname)
      );
    },
  });
// cambiar, todas las imagenes llegan a la carpeta de users

  
  const upload = multer({
    storage: storage,
  }); 

module.exports= upload;  