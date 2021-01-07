var cars = [];

var car1 = new Auto(20000, 1994, 250000);
var car2 = new Auto(25000, 2000, 125000);
var car3 = new Auto(300000, 2018, 100000);

cars.push(car1);
cars.push(car2);
cars.push(car3);

$(function(){

    for(var i=0; i<cars.length; i++) {
        $("#table_DOM").append(
            "<tr><td>" + cars[i].rok +
            "</td><td>" + cars[i].przebieg +
            "</td><td>" + cars[i].cena_wyjsciowa +
            "</td><td>" + cars[i].cena_koncowa +
            "</td></tr>");
    }
})