const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');

// storage engine

const storage = multer.diskStorage({
  destination: './upload/images+videos',
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
});

app.post('/upload', upload.single('profile'), (req, res) => {
  console.log(req.file);
});
app.listen(4000, () => {
  console.log('Server up and running');
});
