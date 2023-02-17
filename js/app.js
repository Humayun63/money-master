setElementbyId('caclulate-expence').addEventListener('click', function () {
    const income = getValueFromInput('income-field');
    const food = getValueFromInput('food-field');
    const rent = getValueFromInput('rent-field');
    const cloths = getValueFromInput('cloths-field');
    if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(cloths)) {
        alert('Input Valid Number');
    } else {
        if (food < 0 || income < 0 || rent < 0 || cloths < 0) {
            alert('Input Valid Number');
        } else {
            let totalExpense = food + rent + cloths;
            let balance = income - totalExpense;
            if (balance < 0) {
                alert('Tor Eto Taka Nai Khoroch Korar Moto!')
            } else {
                updateInnerValue('total-expense', totalExpense);
                updateInnerValue('total-balance', balance);
            }
        }
    }
});
setElementbyId('save-amount').addEventListener('click', function () {
    const income = getValueFromInput('income-field');
    const savings = getValueFromInput('savings-field');
    const balance = getValueFromInnerText('total-balance');
    let savingAmount;
    if (savings < 100 && savings > 0) {
        savingAmount = income * (savings / 100);
        let remainingBalance = (balance - savingAmount).toFixed(2);
        if (remainingBalance < 0) {
            alert("Tor Kase Eto Save Korar Taka Nai, FOKIR!");
        } else {
            updateInnerValue('saving-amount', savingAmount.toFixed(2));
            updateInnerValue('remaining-balance', remainingBalance);
        }
    }else{
        alert('Input Valid Number!')
    }
})