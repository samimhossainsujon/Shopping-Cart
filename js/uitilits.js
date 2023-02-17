function getTextElementValueId(elementId){
    const PhonTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = PhonTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementValueById(elementId, value){
    const SubTotalElement = document.getElementById(elementId);
    SubTotalElement.innerText = value;
}


function calculateSubTotal(){
    const currentPhoneTotal = getTextElementValueId('phon-Total');
    const currentCaseTotal = getTextElementValueId('case-Total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-Total', currentSubTotal);
    

    // calculate tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);



    setTextElementValueById('text-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-Total', finalAmount);
}