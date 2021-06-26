
const fs = require("fs");
const getFilesList = (req, res) => {
    const path =  `${__dirname}/../../uploadResults/`;
  
    fs.readdir(path, function (err, files) {
      if (err) {
        res.status(500).send({
          message: "Files not found.",
        });
      }
  
      let filesList = [];
  
      files.forEach((file) => {
        filesList.push({
          name: file,
          url: file,
        });
      });
  
      res.status(200).send(filesList);
    });
  };
  
  const downloadFiles = (req, res) => {
      const fileName = req.params.name;
      const path =  `${__dirname}/../../uploadResults/`;
    
      res.download(path + fileName, (err) => {
        if (err) {
          res.status(500).send({
            message: "File can not be downloaded: " + err,
          });
        }
      });
  };
  
  module.exports = { downloadFiles, getFilesList };