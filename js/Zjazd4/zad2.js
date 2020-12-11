function numbersInRangeDividedBy(rangeStart, rangeEnd, divider) {
    let arrayOfNumbers = [];
    for (let i = rangeStart; i <= rangeEnd; i++) {
        if (i % divider === 0) arrayOfNumbers.push(i);
    }
    
    if (arrayOfNumbers.length > 0) { 
        console.log(arrayOfNumbers)
    } else {
        console.log("Numbers not found")
    }
}