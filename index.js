const fs = require('fs');
const axios = require('axios');

// Overal data
let data;

//Regex To extract paratmeters such as open,high, low, close and date.
let RegOpen = /(Open:.+?(?=}))/g;
let RegClose = /(Close:.+?(?=}))/g;
let RegHigh = /(High:.+?(?=}))/g;
let RegLow = /(Low:.+?(?=}))/g;
let RegDate = /(Date:.+?(?=}))/g;

//HTTP Request To obtain data
axios.post(`http://charting.bseindia.com/charting/RestDataProvider.svc/DerivDataBetween?Exch=66&ScCode=500111&fromdate=08-02-2014-00:00:00-AM&todate=08-02-2019-00:00:00-AM`)
  .then(function (response) {
    data = JSON.stringify(response.data).replace(/\\"/g, '');
    //Open Data
    let OpenArray = data.match(RegOpen);
    let Open  = OpenArray[0].replace(/Open:/g,'');
    Open = Open.split(',').map(Number);
    //console.log(Open);

    //Close Data
    let CloseArray = data.match(RegClose);
    let Close  = CloseArray[0].replace(/Close:/g,'');
    Close = Close.split(',').map(Number);
    // console.log(Close);

    //High Data
    let HighArray = data.match(RegHigh);
    let High  = HighArray[0].replace(/High:/g,'');
    High = High.split(',').map(Number);
    // console.log(High);

    //Low Data
    let LowArray = data.match(RegLow);
    let Low  = LowArray[0].replace(/Low:/g,'');
    Low = Low.split(',').map(Number);
    // console.log(Low);

    //Date Data
    let DateArray = data.match(RegDate);
    let Date  = DateArray[0].replace(/Date:/g,'');
    Date = Date.split(',');
    // console.log(Date);


    //Joining All parameter in one object.
    let StockData = {
      Open : Open,
      High : High,
      Low : Low,
      Close : Close,
      Data : Date  
    }
    //File System function to write Object to new Json file.
    fs.writeFile('./data/Data.json', JSON.stringify(StockData), 'utf-8', function (err) {
      if (err) throw err;
      console.log('Done!');
    })
  })
  .catch(function (error) {
    console.log(error);
});

