const readline = require('readline');// using readline
const fs = require('fs');// using fs
const rob=require('./robbery.js');
const bur=require('./burglary.js');
const rl = readline.createInterface({
  input: fs.createReadStream('./input/Crimes_-_2001_to_present.csv'), // Read CSV file.
});
// const criminalDamage = [];
// const robberyTypes = [];
const robberyBurglary=[];
const robbery = new Array(16);
const burglary = new Array(16);
robbery.fill(0);
burglary.fill(0);
// const vehicle = new Array(16);// array of counters for given time frame 2001-2016
// const property = new Array(16);
// const stateSupProperty = new Array(16);
// vehicle.fill(0);
// property.fill(0);
// stateSupProperty.fill(0);
// const hasProperty= /TO PROPERTY/;
// const hasVehicle = /TO VEHICLE/;
// const hasState = /TO STATE SUP PROP/;
// const has = /CRIMINAL DAMAGE/;
// const robSet = new Set();
// const robMap = new Map();
// const hasRobbery = /ROBBERY/;

rl.on('line', (line) => {
  // let s;
  // let index;
  // if (line.search('ROBBERY') !== -1) {
  //   s = line.split(',');

  //   for (let i = 0; i < s.length; i += 1) {
  //     if (Number(s[i]) > 2000 && Number(s[i]) < 2017) {
  //       index = Number(s[i]);
  //       break;
  //     }
  //   }
  //   index -= 2001;
  //   rob[index] += 1;
  // }
  // if (line.search('BURGLARY') !== -1) {
  //   s = line.split(',');

  //   for (let i = 0; i < s.length; i += 1) {
  //     if (Number(s[i]) > 2000 && Number(s[i]) < 2017) {
  //       index = Number(s[i]);
  //       break;
  //     }
  //   }
  //   index -= 2001;
  //   burg[index] += 1;
  // }
robbery=rob.countRobbery(line);
burglary=bur.countBurglary(line);

  // let index1;
  // let x;
  // if (has.test(line)) {
  //   if (hasVehicle.test(line)) {
  //     x = line.split(',');
  //     for (let i = 0; i < x.length; i += 1) {
  //       if (Number(x[i]) > 2000 && Number(x[i]) < 2017) {
  //         index1 = Number(x[i]);
  //         break;
  //       }
  //     }
  //     vehicle[index1 - 2001] += 1;// (index1-2001) as index1 0 refers to the year 2001
  //   }
  //   if (hasState.test(line)) {
  //     x = line.split(',');
  //     for (let i = 0; i < x.length; i += 1) {
  //       if (Number(x[i]) > 2000 && Number(x[i]) < 2017) {
  //         index1 = Number(x[i]);
  //         break;
  //       }
  //     }
  //     stateSupProperty[index1 - 2001] += 1;
  //   }
  //   if (hasProp.test(line)) {
  //     x = line.split(',');
  //     for (let i = 0; i < x.length; i += 1) {
  //       if (Number(x[i]) > 2000 && Number(x[i]) < 2017) {
  //         index1 = Number(x[i]);
  //         break;
  //       }
  //     }
  //     property[index1 - 2001] += 1;
  //   }
  // }

  // if (hasRobbery.test(line)) {
  //   x = line.split(',');
  //   let index2 = x.indexOf('ROBBERY');
  //   index2 += 1;
  //   const previousSize = robSet.size;
  //   robSet.add(x[index2]);
  //   const afterSize = robSet.size;
  //   if (previousSize < afterSize) {
  //     robMap.set(x[index2], 1);
  //   } else {
  //     const currentSize = robMap.get(x[index2]);
  //     robMap.set(x[index2], currentSize + 1);
  //   }
  // }
});
rl.on('close', () => {
  for (let i = 0; i < burglary.length; i += 1) {
    const obj = {
      YEAR: 0,
      ROBBERY: 0,
      BURGLARY: 0,
    };
    const year = 2000 + i + 1;
    obj.YEAR = year;
    obj.BURGLARY = burglary[i];
    obj.ROBBERY = robbery[i];
    robberyBurglary.push(obj);
  }


 // robbery.push(searchRobbery(line));
 //  burglary.push(searchRobbery(line));
  // for (let i = 0; i < vehicle.length; i += 1) {
  //   const type = {
  //     Year: '',
  //     Property: '',
  //     Vehicle: '',
  //     State: '',
  //   };
  //   type.Year = i + 2001;
  //   type.Property = property[i];
  //   type.State = stateSupProperty[i];
  //   type.Vehicle = vehicle[i];
  //   criminalDamage.push(type);
  // const iterator1 = robMap[Symbol.iterator]();
  // for (const item of iterator1) {
  //   const prop = {};
  //   prop.Type = item[0];
  //   prop.Count = item[1];
  //   robberyTypes.push(prop);
  // }

  console.log(robberyBurglary);
  const myJSON1 = JSON.stringify(robberyBurglary); // JSON creation

  fs.writeFile('./json/output1.json', myJSON1, 'utf8', (err1) => {
    if(err1)
      throw err1;
  });

  // console.log('JSON1 file has been saved.');
  // console.log();
  // const myJSON2 = JSON.stringify(v); // JSON creation

  // fs.writeFile('./json/output2.json', myJSON2, 'utf8', (err2) => {
  //   if(err2)
  //     throw err2;
  // });
  // console.log('JSON2 file has been saved.');

  // console.log(robberyTypes);
  // const myJSON3 = JSON.stringify(robberyTypes); // JSON creation

  // fs.writeFile('./json/output3.json', myJSON3, 'utf8', (err3) => {
  //   if(err3)
  //     throw err3;
  // });
  // console.log('JSON3 file has been saved.');
});