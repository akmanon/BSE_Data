const fs = require('fs');
const axios = require('axios');
const symbol = require('./Symbol/symbol');

// Overal data
let data;

//Regex To extract paratmeters such as open,high, low, close and date.
let RegOpen = /(Open:.+?(?=}))/g;
let RegClose = /(Close:.+?(?=}))/g;
let RegHigh = /(High:.+?(?=}))/g;
let RegLow = /(Low:.+?(?=}))/g;
let RegVolume = /(Volume:.+?(?=}))/g;
let RegDate = /(Date:.+?(?=}))/g;
let i = 0;
//HTTP Request To obtain data
for (let i in symbol) {
  axios.post(`###API####`)

    .then(function (response) {
      data = JSON.stringify(response.data).replace(/\\"/g, '');
      //Open Data
      let OpenArray = data.match(RegOpen);
      let Open = OpenArray[0].replace(/Open:/g, '');
      Open = Open.split(',').map(Number);
      //console.log(Open);

      //Close Data
      let CloseArray = data.match(RegClose);
      let Close = CloseArray[0].replace(/Close:/g, '');
      Close = Close.split(',').map(Number);
      // console.log(Close);

      //High Data
      let HighArray = data.match(RegHigh);
      let High = HighArray[0].replace(/High:/g, '');
      High = High.split(',').map(Number);
      // console.log(High);

      //Low Data
      let LowArray = data.match(RegLow);
      let Low = LowArray[0].replace(/Low:/g, '');
      Low = Low.split(',').map(Number);
      // console.log(Low);

      //Date Data
      let DateArray = data.match(RegDate);
      let Date = DateArray[0].replace(/Date:/g, '');
      Date = Date.split(',');
      // console.log(Date);

      //Volume Data
      let VolumeArray = data.match(RegVolume);
      let Volume = VolumeArray[0].replace(/Volume:/g, '');
      Volume = Volume.split(',').map(Number);
      // console.log(Volume);


      //Joining all Parameter to generate json
      let StockData = {
        Open: Open,
        High: High,
        Low: Low,
        Close: Close,
        Date: Date,
        Volume: Volume
      }

      //Joining all Parameter to generate csv(excel file)
      let string = "Open,High,Low,Close,Date,Volume"
      for (let j = 0; j < Open.length; j++) {
        string = string + `\r\n${Open[j]},${High[j]},${Low[j]},${Close[j]},${Date[j]},${Volume[j]}`;
      }
      // console.log(string);


      //File System function to write Object to new Json file.
      fs.writeFile(`./StockDataset/JSON/${symbol[i].ScripName}.json`, JSON.stringify(StockData), 'utf-8', function (err) {
        if (err) throw err;
        console.log('Done! JSON');
      })

      //File System function to write Object to new CSV file.
      fs.writeFile(`./StockDataset/CSV/${symbol[i].ScripName}.csv`, string, 'utf-8', function (err) {
        if (err) throw err;
        console.log('Done! CSV');
      })
    })
    .catch(function (error) {
      console.log(error);
    });
}
