// only input field iteam
function inputField(idname) {

    const callInputField = document.getElementById(idname);
    const insideInputField = callInputField.value;
    const convertInput = parseFloat(insideInputField)
    callInputField.value = '';
    return convertInput;

}
// only disply show iteam
function displayField(amount, inputValue) {
    const callDisplayField = document.getElementById(amount);
    const insideDisplayField = callDisplayField.innerText;
    const convertDisplay = parseFloat(insideDisplayField);
    const total = convertDisplay + inputValue;
    callDisplayField.innerText = total;
}


// balance update
function callBalance(balaceId, add) {
    const balanceAmount = document.getElementById('balnce-display');
    const insideBalance = balanceAmount.innerText;
    const convertBalance = parseFloat(insideBalance);
    const balaceSum = convertBalance + balaceId;

    if (add == true) {
        balanceAmount.innerText = balaceSum;
    } else {
        const balaceSum = convertBalance - balaceId;
        balanceAmount.innerText = balaceSum;
    }
}


// display button 
document.getElementById('deposite-btn').addEventListener('click', function () {
    const emtyField = inputField('deposit-field')
    if (emtyField >= 0) {
        displayField('deposite-disply', emtyField);
        callBalance(emtyField, true);
    } else {
        alert('input valid number')
    }
});
// withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const emtyFieldTwo = inputField('withdraw-field')
    if (emtyFieldTwo >= 0) {
        displayField('withdraw-display', emtyFieldTwo);
        callBalance(emtyFieldTwo);
    } else {
        alert('input valid number')
    }
})