const fs = require('fs');
const axios = require('axios');
const _ = require('lodash');
const symbol = require('./symbols.json')
let data1  =_.map(symbol, _.partialRight(_.pick, ['LongName', 'ScripName', 'Symbol', 'Volume', 'TurnOver', 'MCapFull']));
console.log(data1);
fs.writeFile('./Symbol/symbol.json', JSON.stringify(data1), 'utf-8', function (err) {
    if (err) throw err;
    console.log('Done!');
  })


-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAizMQnerJvsG/ArAHlOCrTnh/Xfh0eDR6jGRRGs0vNokFzPj6JZW//5dWjMY9
vNU7WHMTCa7sXrqGRBbK7V8kJXNjgTAWSnkl+kwEjHdXmKGyZp224wBjEml8r/YckfiIOv3zzJka
exA+t1Heu6Jc97kbiY6PrJhRNbvnR4w1iy7lI2hdrbqZ6tI6V6dt2vTdwRZygrZ6b0e/MzGtaNtl
icZaO1MoYBm//Z14u7y8sMJvLKRA/hTO6zJYjPXNaDP1F5N0HanmOoKDi3njs1uVG28fxpAWkgmy
n02zEuS7Pe6zqlTYp2276Z0WKsHoy5f8GZXWssmBCOuOrByeMA1QqQIDAQABAoIBAEbcPe9F4GGd
G3Fwzss4+7u8l4nsus2eWWwyfR8ZqJkoc61+aUjMzKp+De8n07HXEpjaK6zYQTeP2F29BJyFvE7c
SKExK4fJ2E1seTxQXGU0my6lxr4UKlrrHDAvJygfzqnJMVzL67EN+f80TCBUbOMmdiA2VGlWOLET
8I55j6BEBN4fNP6VYmwQro9vVvulwbxQ4vgwoWkckNJ1iLDa8iRUUpTPa/IZ4xTMGUbHBZo2ip0h
hDGwjREVxEu5Z6K6SnmoH0bnMnD0xAGOfcIX5Oee5iTT/FFzdf+DlQ/7+UGxwIG2sKNY30V7UwLO
49NO0DHqsavL4rv48/waU4beVUkCgYEAwTznrtjCOs6eQi5jkaojkaqvCO30lPnPGBzrJd+i4Jin
JSktD2OOkdH4lxAnG1HRhKP/os5S43V8OZ/ENY6WGj/jhVy9+napNchyQxqkjTtCEBZUMpujPqT8
PHiLIGEvw6qLP/LPT0C580UBpvXaG3RGV5w6Hi0wKtALgPObfNsCgYEAuGkKv+JB86QHcYnEO5/4
Aa+HkcgMq0QKGEbz7JONTX/b46W9LlpYOEtLo6mWTX25xMxp3DWFrYHvuNvellRoLYgQPfNY9wsz
xAmDiuwgo8meI2lBBdpBgI4A8xWL01NiXTIdpfMVhrdDO/UwzkWhXfJgFukHkBoOyPDf7jg9ncsC
gYALPiToqlnanAzfIt3OKsz4+6pFZbrWNBaVe5E+2d0bHiaTZermO0+fMk05VMpBr6f2BKip60Et
VLeOjroWt54KFu+A4d13xhGgPHJRbyplwS3dy77IVv/PdD/ssMK/dogV5UVGyjS/kq9+9OPct+8h
q8kv7bn/6Xck9ofEz+ebAwKBgGGGU8QEwUI7diBKbnfl8r/Zd4XWWTTd58TNCUUNB4Z73us2hKUV
7F/hGiB0mGNk4TC9tiJaP9bxx7hotv+jpfCma4iHwH3t87NyIJoApIZaIwKxME0LDucQslncBDV/
fJ6y2VEhDDpRgwIbenMsCdnoS37yQCiqTzVfhd2y6osfAoGBALpVEipK+a2Ru3AuYEoME+XTnNgX
QumnakKOWuELk74bhKZUuyO0bAvNJaY8r5Ppx9/sVo54ItPpuOPNG06v3j51fGzwzKKOTdJo5y9i
aGSWwKmqPwOpv2bt5vvBcW84yybg4O5nI/zK2pMx71bA6AdSU6qYsjSQ5SD1UazmNMST
-----END RSA PRIVATE KEY-----
