const https = require('https');
const url = 'https://res.cloudinary.com/l44x18ko/image/upload/v1/carqconnect/01-a.png';
https.request(url, { method: 'HEAD' }, (res) => {
  console.log('Status:', res.statusCode);
}).on('error', (e) => console.log(e)).end();
