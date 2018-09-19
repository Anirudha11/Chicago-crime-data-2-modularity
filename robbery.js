function countRobbery(line){
  let year;
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
//   for(let i=0;i<robbery.length;i++){
//    year=index+2001;
//   const robbery= {
//       YEAR: year,
//       ROBBERY: ro 
//     };
// }
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

  return robbery;
}

module.exports=countRobbery;