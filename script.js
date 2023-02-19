var person = {
    name: 'Василий',
    year: 1990,
    family: ['Елена', 'Игорь'],
    car: {
        year: 2010, 
    model: 'Ford'
    },
    calculateAge: function () {
        this.age = 2023 - this.year // = person.year
    }
}

console.log(person)
console.log(person.name)
console.log(person['year'])
var field = 'car'
console.log(person[field].year)

person.year = 1993

console.log(person)

person.calculateAge()