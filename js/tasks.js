{
    // TASK 2

    const rain = Math.random();
    const rain1 = Math.round(rain) 
    console.log('rain1: ', rain1);

    if (rain1 === 1) {
        console.log('Пошёл дождь. Возьмите зонт!');
    } else {
        console.log('Дождя нет!');
    }
}

{
    // TASK 3

    const math = +prompt('Введите кол-во баллов по математике');
    const rus = +prompt('Введите кол-во баллов по русскому языку');
    const inform = +prompt('Введите кол-во баллов по информатике');

    const total = math + rus + inform
    console.log('total: ', total);

    if (total >= 265) {
        alert('Поздравляю, вы поступили на бюджет!');
    } else {
        alert('К сожалению, вы не поступили на бюджет');
    }

}



{
    // TASK 4
    
    const money = +prompt('Сколько денег Вы хотите снять?');

    if (money < 100) {
        console.log('Сумма должна быть больше 100 руб');
    } else {
        if (money % 100 !== 0) {
            console.log('Введите сумму кратную 100');
        } else {
        console.log(`Возможно выдать ${money}`);
        }
    } 
}
