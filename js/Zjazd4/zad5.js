function christmasTree(height) {
    let i = 1;
    let star = '*'
    while (i <= height) {
        console.log(star.repeat(i));
        i++;
    }
}