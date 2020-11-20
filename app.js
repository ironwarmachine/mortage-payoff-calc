// Property Tax is not included in this formula

const year = 12;
function getTotal(){
    var yearlyMortgage = document.getElementById('mortgage').value * year; 
    var extraPaymentByYear = document.getElementById('extra-payment').value * year; 
    var payoffYears = document.getElementById('payoff-years').value;
    //alert(yearlyMortgage);
    //alert(extraPaymentByYear);
    //alert(payoffYears);
    var payoffEstimate = (yearlyMortgage + extraPaymentByYear) * payoffYears;
    document.getElementById('pay-total-value').innerHTML="You will have paid off: $" + payoffEstimate + " dollars.";
}
