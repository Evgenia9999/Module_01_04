
{
    // 1 TASK

    let itemNamePrompt = prompt('Напишите наименование товара');
    let itemNumPrompt = Number(prompt('Напишите количество товара'));
    
        if (Number.isFinite(itemNumPrompt)) {
        
        let itemCategoryPrompt = prompt('Напишите категорию товара');
        let itemtPricePrompt = Number(prompt('Напишите цену товара'));

            if (Number.isFinite(itemtPricePrompt)) {
                
                console.log(`На складе ${itemNumPrompt} единицы товара "${itemNamePrompt}" на сумму ${itemtPricePrompt * itemNumPrompt} у.е.`);
            } else {
                console.log("Вы ввели некорректные данные");
            }
        } else {

        console.log("Вы ввели некорректные данные");
        }
}






