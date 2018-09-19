function searchRobberyBurglary(line){
  let year;
  // let rob=[];
  // let burg=[];
  robbery.fill(0);
	if (line.search('ROBBERY') !== -1) {
    let s;
    let index;
    s = line.split(',');
    for (let i = 0; i < s.length; i += 1) {
      if (Number(s[i]) > 2000 && Number(s[i]) < 2017) {
        index = Number(s[i]);
        break;
      }
    }
    index -= 2001;
    robbery[index] += 1;
  }

  //   if (line.search('BURGLARY') !== -1) {
  //     let s;
  //     let index;
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

  // year=index+2001;
  // const robberyBurglary = {
  //     YEAR: year,
  //     ROBBERY: 0,
  //     BURGLARY: 0,
  //   };
    return robberyBurglary;
}

module.exports=searchRobberyBurglary;