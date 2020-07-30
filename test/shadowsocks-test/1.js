const fetch = require('node-fetch');
fetch('https://www.google.com').then(res => res.json()).then(console.log).catch(console.error);