function christmasTreeByNight(height) {
   let i = height -1;
   let star = '*';
   let space = ' ';
   let numOfSpaces = 0;
   while (i >= 0) {
       console.log(star.repeat(i) + space.repeat(numOfSpaces) + star.repeat(i));
       i--;
       numOfSpaces += 2;
       if (i === 0)  console.log(star.repeat((height -1) * 2));
   }
}
