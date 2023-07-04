const salary1 = +prompt('Введите ваш доход');

if (salary1 < 15000) {
    tax = salary1 * 0.13;
} else {
    if (salary1 >= 50000) {
        tax = (salary1 - 50000) * 0.3 + 15000 * 0.13 + 35000 * 0.2; 
    } else {
        tax = 15000 * 0.13 + (salary1 - 15000) * 0.2;
    }
}

console.log('tax: ', tax);