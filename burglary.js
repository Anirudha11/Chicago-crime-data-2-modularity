function countBurglary(line){
	if (line.search('BURGLARY') !== -1) {
      let s;
      let index;
    s = line.split(',');
    for (let i = 0; i < s.length; i += 1) {
      if (Number(s[i]) > 2000 && Number(s[i]) < 2017) {
        index = Number(s[i]);
        break;
      }
    }
    index -= 2001;// as index 0 represents year 2001
    burglary[index] += 1;
  }
   return burglary;
}
 module.exports=countBurglary;