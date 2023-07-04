const salary = +prompt('Введите ваш доход');

if (salary < 15000) {
    tax = salary * 0.13;
} else {
    if ((salary > 15000) && (salary < 50000)) {
        tax = salary * 0.2;
    } else {
        if (salary >= 50000) {
            tax = salary * 0.3;
    }
    }
}

console.log('tax: ', tax);




// Not correct:`

// switch (salary) {
//     case (salary < 15000):
//         tax1 = salary * 0.13;
//         break;
//     case (salary > 15000) && (salary < 50000):
//         tax1 = salary * 0.2;
//         break
//     case salary >= 50000:
//         tax1 = salary * 0.3;
//         break
// }
// console.log(tax);




