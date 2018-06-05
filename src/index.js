require('main.scss');

// const MainTemplate = require('./main.njk');
// document.getElementById('content').innerHTML = MainTemplate.render({});

let data_1 = require('./data/data-1.json');
let data_2 = require('./data/data-2.json');
console.log('Data_1: ', data_1)

const MainTemplate = require('./solution.njk');


document.getElementById('content').innerHTML = MainTemplate.render({ data: data_1 });
document.getElementById('content2').innerHTML = MainTemplate.render({ data: data_2 });
