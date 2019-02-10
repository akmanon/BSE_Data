const fs = require('fs');
const axios = require('axios');

// let data = `{"GetDataBetween_DatabaseResult":"Output:{"DataInputValues":[{"OpenData":[{"Open":"109.9,109.9"}],"HighData":[{"High":"134.9,134.9"}],"LowData":[{"Low":"108,108"}],"CloseData":[{"Close":"129.25,129.25"}],"VolumeData":[{"Volume":"6834278,6834278"}],"DateData":[{"Date":"08/02/2019 12:00:00 AM,08/02/2019 12:00:00 AM"}]}]}"}`;
let data;
let myR = /(Open:.+?(?=}))/g;
axios.post(`http://charting.bseindia.com/charting/RestDataProvider.svc/DerivDataBetween?Exch=66&ScCode=500111&fromdate=08-02-2014-00:00:00-AM&todate=08-02-2019-00:00:00-AM`)
  .then(function (response) {
    data = JSON.stringify(response.data).replace(/\\"/g, '');
    let dataarray = data.match(myR);
    console.log(dataarray[0]);
    fs.writeFile('./data/Data.json', data, 'utf-8', function (err) {
      if (err) throw err;
      console.log('Done!');
    })
  })
  .catch(function (error) {
    console.log(error);
});

