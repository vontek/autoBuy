const multer = require('multer');
const path = require('path');

const upload = multer({
  storage: multer.diskStorage({
    filename: function(req, file, callback) {
      callback(null, Date.now() + file.originalname);
    }
  }),
  fileFilter: (req, file, cb) => {
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.pdf'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (!allowedExtensions.includes(ext)) {
      cb(new Error('Unsupported file type!'), false);
      return;
    }
    cb(null, true);
  }
});

module.exports = upload;
