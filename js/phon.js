function updatePhonNumber(isIncrease) {
    const PhonNumberField = document.getElementById('phon-number-filed');
    const PhonNumberString = PhonNumberField.value;
    const previousPhonNumber = parseInt(PhonNumberString);


    let newPhonNumber;
    if (isIncrease === true) {
        newPhonNumber = previousPhonNumber + 1;
    } else {
        newPhonNumber = previousPhonNumber - 1;
    }

    PhonNumberField.value = newPhonNumber;
    return newPhonNumber;
}


function updatePhonTotalPrice(newPhonNumber) {
    const PhonTotalPrice = newPhonNumber * 1219;
    const PhonTotalElement = document.getElementById('phon-Total');
    PhonTotalElement.innerText = PhonTotalPrice;
}




document.getElementById('btn-phon-plus').addEventListener('click', function () {
    const newPhonNumber = updatePhonNumber(true);
    updatePhonTotalPrice(newPhonNumber);
    calculateSubTotal();

});

document.getElementById('btn-phon-minus').addEventListener('click', function () {
    const newPhonNumber = updatePhonNumber(false);
    updatePhonTotalPrice(newPhonNumber);
    calculateSubTotal();

})