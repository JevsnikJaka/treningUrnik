const xlsx = require('node-xlsx');
var express = require('express');
var router = express.Router();

let dneviVTednu = [
  'PON',
  'TOR',
  'SRE',
  'CET',
  'PET',
  'SOB',
  'NED',
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/getUrnik', (req, res, next) => {
  // const readXlsxFile = require('read-excel-file/node')

  // readXlsxFile('C:\\GitProjekti\\treningUrnik\\routes\\OK MERKUR MARIBOR URNIK - avgust 2022.xlsx').then((rows) => {
  //   // `rows` is an array of rows
  //   // each row being an array of cells.
  //   res.send(rows);
  // })
  // const workSheetsFromFile = xlsx.parse('C:\\GitProjekti\\treningUrnik\\routes\\OK MERKUR MARIBOR URNIK - avgust 2022.xlsx');
  // res.send(workSheetsFromFile);
  // console.log(workSheetsFromFile[0].data.length)
  
  // workSheetsFromFile[0].data.forEach((vrstica, i) => {
  //   if (i > 1) {
  //     vrstica.forEach((row, i) => {

  //     });
  //   }
  // });

  // res.send(workSheetsFromFile[0].data[1]);

  let dan = new Date();
  dan = dan.getUTCDate().toString();
  
  switch(dan) {
    case '4':
      res.sendFile(__dirname + '/2022-08-04.png');
      break;
  }

});

module.exports = router;
