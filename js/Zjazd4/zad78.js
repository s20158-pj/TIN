function rectangleArea(sideA, sideB) {
    return sideA * sideB;
}
function triangleArea(sideA, height) {
    return (sideA * height) / 2;
}
function trapeziumArea(sideA, sideB, height) {
    return ((sideA + sideB) * height) / 2;
}
function parallelogramArea(sideA, height) {
    return sideA * height;
}

function getAreaUsingCallback(func, ...params) {
    return func(...params);
}

function getAreaUsingSwitch(figure, ...params) {
    let area = 0;
    switch(figure) {
        case 'rectangle':
            area = rectangleArea(...params);
            console.log(area);
            break;
        case 'triangle':
            area = triangleArea(...params);
            console.log(area);
            break;
        case 'trapezium':
            area = trapeziumArea(...params);
            console.log(area);
            break;
        case 'parallelogram':
            area = parallelogramArea(...params);
            console.log(area);
            break;
        default:
            console.log('Something went wrong. Please try again');
    }
}