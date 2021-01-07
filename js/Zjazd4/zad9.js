function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }

function newtonsSymbol(numX, height) {
    return factorialize(numX) / (factorialize(height) * factorialize(numX - height));
}

function pascalsTraingle(height) {
    let triangle = [];

    if (height === 0) return triangle;

    triangle.push([1]);

    if (height === 1) return triangle;

    for (let i = 1; i < height; i++) {
        let insideTriangle = [];
        for (let j = 0; j <= i; j++) {
            insideTriangle.push(newtonsSymbol(i,j));
        }
        triangle.push(insideTriangle);
        helperArr = [];
    }
    
    console.log(triangle);
}
