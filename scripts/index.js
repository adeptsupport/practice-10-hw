'use strict';

const myNumber = 3;
const answer = prompt('Укажите любое кол-во целых чисел (через запятаю)');

if (answer === null) {
    console.log('Ответ не получен!');
} else {
    const values = answer.split(',');
    const result = [];
    for (let i = 0; i < values.length; i++) {
        const number = +values[i];
        if (number !== 0 && number % 3 === 0) {
            result.push(number);
        }
    }
    if (result.length > 0) {
        console.log(`Найдены числа, кратные 3, в количестве ${result.length}шт:`);
        console.log(result.join(', '));
    } else {
        console.log('Числа которые, кратны 3, не найдены')
    }
}
