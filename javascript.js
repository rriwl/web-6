
function calculateTotal() { 
    // Получение значения количества товара из элемента с id "quantity"
    var quantity = document.getElementById("quantity").value; 
    // Проверка, является ли введенное значение количества числом и меньше ли оно нуля или равно нулю
    //isNaN проверяет, является ли введенное значение числом
    if (isNaN(quantity) || quantity < 0 || quantity == 0) { 
        alert("Введите корректное количество товара");
        return;
    }

    // Получение значения цены выбранного продукта из выбранного элемента с именем "productType"
    // метод querySelector ищет элемент, checked - выбранное значение
    var productPrice = document.querySelector('input[name="productType"]:checked').value; 
    var check = 0;
    // Получение числового значения из выбранного элемента с именем "propertyCheckbox"
    var checkValue = parseInt(document.querySelector('input[name="propertyCheckbox"]').value);
    var delivery = 0;

    //если выбираем доставку курьером, прибавляем 200
    if (document.querySelector('input[name="propertyCheckbox"]').checked == true){
        check =+ checkValue;
    }
    var selectValue = (document.getElementById("optionsSelect")).value;
    if (selectValue == 1){ 
        delivery += 200;
    } else {
        delivery = 0;
    }
   
    var productType = document.querySelector('input[name="productType"]:checked').id;  
    if (productType === "product1") {
        //скрываем опции для первого эл-та
        document.getElementById("optionsSection").style.display = "none";
        document.getElementById("propertySection").style.display = "none";
    } else if (productType === "product2") { //оставляем возможность выбора типа доставки
        document.getElementById("optionsSection").style.display = "block"; //что показываем
        document.getElementById("propertySection").style.display = "none"; //что скрываем
    } else if (productType === "product3") { //оставляем опцию
        document.getElementById("optionsSection").style.display = "none";
        document.getElementById("propertySection").style.display = "block";
    }
    
    var totalCost = quantity * productPrice + check + delivery; 
    document.getElementById("totalCost").innerHTML = "Стоимость заказа: " + totalCost + " рублей"; 

}

