class Auto {
    constructor(cena_wyjsciowa, rok = 0, przebieg = 0) {
        this.rok = rok;
        this.przebieg = przebieg;
        this.cena_wyjsciowa = cena_wyjsciowa;
        this.cena_koncowa = cena_wyjsciowa;
    }
};

const CARS = [];

Auto.prototype.increasePrice = function() {
    return this.cena_wyjsciowa += 1000;
}

Auto.prototype.lowerPrice = function() {
    if (this.rok) return this.cena_koncowa -= (this.cena_wyjsciowa - this.rok * 1000);
}

Auto.prototype.lowerPriceByMileage = function() {
    let carsMileage = Math.floor(this.przebieg / 100_000);
    return this.cena_koncowa -= carsMileage * 100_00;
}

Auto.prototype.addMileageAndYear = function(mileage, year) {
    this.rok = year;
    this.przebieg = mileage;
    this.lowerPrice();
    this.lowerPriceByMileage();
}

Auto.prototype.saveToArray = function() {
    if (this.cena_koncowa > 100_00) CARS.push(this);
}

const increaseYear = () => {
    CARS.forEach(car => car.rok += 1);
};